'use strict';

/* ================================= SETUP ================================= */

const mockery    = require('mockery');
const { assert } = require('chai');

const dummyMovies = [
  {
    Title  : 'Harry Potter and the Sorcerer\'s Stone',
    Year   : '2001',
    imdbID : 'tt0241527',
    Type   : 'movie',
    Poster : 'https://sample1.jpg'
  },
  {
    Title  : 'The Sword in the Stone',
    Year   : '1963',
    imdbID : 'tt0057546',
    Type   : 'movie',
    Poster : 'https://sample2.jpg'
  },
  {
    Title  : 'Guardians of the Galaxy',
    Year   : '2014',
    imdbID : 'tt2015381',
    Type   : 'movie',
    Poster : 'https://sample3.jpg'
  },
];


/* ========================== FAKE MODEL METHODS =========================== */

const fakeGetOne = (imdbID) => {
  const result = dummyMovies.filter(m => m.imdbID === imdbID)[0];
  if (result) {
    return Promise.resolve(result);
  } else {
    return Promise.resolve({
      Response : 'False',
      Error    : 'Error getting data.'
    });
  }
};

const fakeSearch = ({ title }) => {
  const results = dummyMovies.filter(m => RegExp(title, 'i').test(m.Title));
  if (results.length > 0) {
    return Promise.resolve({
      Search       : results,
      totalResults : results.length.toString(10),
      Response     : 'True'
    });
  } else {
    return Promise.resolve({
      Response : 'False',
      Error    : 'Movie not found!'
    });
  }
};


/* ================================= TESTS ================================= */

describe('API controler', function() {

  let req = {};
  let res;

  before(function() {

    res = {
      resData : { status : 0, json : '' },
      status(status) {
        res.resData.status = status;
        return this;
      },
      json(json) {
        res.resData.json = json;
        return this;
      }
    },

    mockery.enable({
      warnOnReplace      : false,
      warnOnUnregistered : false
    });

    mockery.registerMock('../models/movies', {
      getOne : fakeGetOne,
      search : fakeSearch
    });

    this.controller = require('../../controllers/api_ctrl');
  });

  beforeEach(function() {
    req = {};
  });

  after(function() {
    mockery.deregisterAll();
    mockery.disable();
  });


  describe('.search()', function() {

    it('should return status 200 on success', async function() {
      req.query = { title : 'stone' };
      const { resData } = await this.controller.search(req, res);
      assert.equal(resData.status, 200);

    });

    it('should return array of movies with "stone" in title', async function() {
      req.query = { title : 'stone' };
      const { resData } = await this.controller.search(req, res);

      function hasTitle(movie) {
        const titleRex = /stone/gi;
        return titleRex.test(movie.Title);
      }

      assert.equal(resData.json.Search.length, 2);
      assert.isTrue(resData.json.Search.every(hasTitle));

    });

    it('should return array of movies with "the" in title', async function() {
      req.query = { title : 'the' };
      const { resData } = await this.controller.search(req, res);

      function hasTitle(movie) {
        const titleRex = /the/gi;
        return titleRex.test(movie.Title);
      }

      assert.equal(resData.json.Search.length, 3);
      assert.isTrue(resData.json.Search.every(hasTitle));
    });

    it('should return an Error given title "bananas"', async function() {
      req.query = { title : 'bananas' };
      const { resData } = await this.controller.search(req, res);
      assert.equal(resData.status, 404);
      assert.equal(resData.json.error, 'Movie not found!');
    });

  });


  describe('.getOne()', function() {

    it('should return status 200 on success', async function() {
      req.params = { imdbID : 'tt2015381' };
      const { resData } = await this.controller.getOne(req, res);

      assert.equal(resData.status, 200);
    });

    it('should return the correct movie object', async function() {
      req.params = { imdbID : 'tt2015381' };
      const { resData } = await this.controller.getOne(req, res);

      assert.hasAllKeys(resData.json, [
        'Title', 'Year', 'imdbID', 'Type', 'Poster'
      ]);
      assert.equal(resData.json.Title, 'Guardians of the Galaxy');
    });

    it('should return the correct movie object', async function() {
      req.params = { imdbID : 'tt0057546' };
      const { resData } = await this.controller.getOne(req, res);

      assert.hasAllKeys(resData.json, [
        'Title', 'Year', 'imdbID', 'Type', 'Poster'
      ]);
      assert.equal(resData.json.Title, 'The Sword in the Stone');
    });

    it('should return an error if imdbID not found ', async function() {
      req.params = { imdbID : 'tt9999999' };
      const { resData } = await this.controller.getOne(req, res);

      assert.equal(resData.status, 404);
      assert.equal(resData.json.error, 'Error getting data.');
    });

  });

});