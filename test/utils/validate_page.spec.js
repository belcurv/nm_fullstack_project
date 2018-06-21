'use strict';

/* ================================= SETUP ================================= */

const { assert }   = require('chai');
const validatePage = require('../../utils/validate_page');


/* ================================= TESTS ================================= */

describe('validatePage utility', () => {

  it('should be a function', () => {
    assert.isFunction(validatePage);
  });

  it('should return true for 666', () => {
    assert.isTrue(validatePage(666));
  });

  it('should return true for 1', () => {
    assert.isTrue(validatePage(1));
  });

  it('should throw exception for 0', () => {
    const call = function() {
      validatePage(0);
    };
    assert.throws(call, 'Validation Error: Invalid "page": 0');
  });

  it('should throw exception for type string', () => {
    const call = function() {
      validatePage('666');
    };
    assert.throws(call, 'Validation Error: Invalid "page": 666');
  });

  it('should throw exception for type boolean', () => {
    const call = function() {
      validatePage(true);
    };
    assert.throws(call, 'Validation Error: Invalid "page": true');
  });

  it('should throw exception for type array', () => {
    const call = function() {
      validatePage([666]);
    };
    assert.throws(call, 'Validation Error: Invalid "page": 666');
  });

  it('should throw exception for non-integers', () => {
    const call = function() {
      validatePage(3.1415926);
    };
    assert.throws(call, 'Validation Error: Invalid "page": 3.1415926');
  });

  it('should throw exception if "page" is omitted', () => {
    assert.throws(validatePage, 'Missing required "page" parameter');
  });

});