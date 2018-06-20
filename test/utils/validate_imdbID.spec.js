'use strict';

/* ================================= SETUP ================================= */

const { assert }      = require('chai');
const validate_imdbID = require('../../utils/validate_imdbID');


/* ================================= TESTS ================================= */

describe('validate_imdbID utility', () => {

  it('should be a function', () => {
    assert.isFunction(validate_imdbID);
  });

  it('should return true for tt0304141', () => {
    assert.isTrue(validate_imdbID('tt0304141'));
  });

  it('should return true for tt0330373', () => {
    assert.isTrue(validate_imdbID('tt0330373'));
  });

  it('should return false for tt033037', () => {
    assert.isFalse(validate_imdbID('tt033037'));
  });

  it('should return false for tt033037666', () => {
    assert.isFalse(validate_imdbID('tt033037'));
  });

  it('should return false for t0330373', () => {
    assert.isFalse(validate_imdbID('t0330373'));
  });

  it('should return false for incorrect type', () => {
    assert.isFalse(validate_imdbID(['tt0330373']));
  });

  it('should return false when argument is omitted', () => {
    assert.isFalse(validate_imdbID());
  });

});