'use strict';

/* ================================= SETUP ================================= */

const { assert }      = require('chai');
const validateTitle = require('../../utils/validate_title');


/* ================================= TESTS ================================= */

describe('validateTitle utility', () => {

  it('should be a function', () => {
    assert.isFunction(validateTitle);
  });

  it('should return true for "Harry"', () => {
    assert.isTrue(validateTitle('Harry'));
  });

  it('should return true for "Guardian"', () => {
    assert.isTrue(validateTitle('Guardian'));
  });

  it('should return true for "Harry Potter"', () => {
    assert.isTrue(validateTitle('Harry Potter'));
  });

  it('should throw exception for 666', () => {
    const call = function() {
      validateTitle(666);
    };
    assert.throws(call, 'Validation Error: Invalid "title": 666');
  });

  it('should throw exception for booleans', () => {
    const call = function() {
      validateTitle(true);
    };
    assert.throws(call, 'Validation Error: Invalid "title": true');
  });

  it('should throw exception for arrays', () => {
    const call = function() {
      validateTitle(['Guardian']);
    };
    assert.throws(call, 'Validation Error: Invalid "title": Guardian');
  });

  it('should throw exception for strings of zero length', () => {
    const call = function() {
      validateTitle('');
    };
    assert.throws(call, 'Validation Error: Invalid "title": ');
  });

  it('should throw exception for strings of spaces', () => {
    const call = function() {
      validateTitle('      ');
    };
    assert.throws(call, 'Validation Error: Invalid "title": ');
  });

  it('should throw exception for strings with more than one space', () => {
    const call = function() {
      validateTitle('Harry     Potter');
    };
    assert.throws(call, 'Validation Error: Invalid "title": ');
  });

  it('should throw exception if "title" is omitted', () => {
    assert.throws(validateTitle, 'Missing required "title" parameter');
  });

});