'use strict';

/* ================================= SETUP ================================= */

const request   = require('request-promise-native');
const apiUrl    = 'https://www.omdbapi.com';
const apiKey    = process.env.OMDB_API_KEY;
const Validator = require('../utils/validator');
const validator = new Validator();

/* ============================ PUBLIC METHODS ============================= */

/**
 * Get one movie
 * @param    {String}   imdbID   imdbID
 * @returns  {Object}            Promise + movie
*/
const getOne = (imdbID) => {

  try {
    validator.check({ imdbID });
  } catch (err) {
    return Promise.reject(err);
  }

  const options = {
    url  : apiUrl,
    qs   : { apikey : apiKey, i : imdbID },
    json : true
  };
  return request(options);
};


/**
 * Search by title; returns no more than 50 movies at a time
 * @param    {String}   title    Movie title to search for
 * @param    {Number}   page     Optional results page number
 * @returns  {Object}            Promise + array of movies
*/
const search = async ({ title, page = 1 }) => {
  try {
    validator.check({ title });
  } catch (err) {
    console.log('search validator failed for', title);
    return Promise.reject(err);
  }

  const options = {
    url  : apiUrl,
    qs   : { apikey : apiKey, s : title, page },
    json : true
  };

  try {
    const response    = await request(options);
    const numResults  = +response.totalResults;
    const numRequests = numResults > 50 ? 5 : Math.floor(50 / numResults) + 1;
    const result      = response;

    if (numResults > 10) {
      for (let i = page + 1; i < numRequests + page; i += 1) {
        options.qs.page = i;
        let nextPage    = await request(options);
        result.Search.push(...nextPage.Search);
      }
    }

    return Promise.resolve(result);
  } catch (err) {
    return Promise.reject(err);
  }
};


/* ================================ EXPORTS ================================ */

module.exports = { getOne, search };
