'use strict';

/* ================================= SETUP ================================= */

const { assert } = require('chai');
const Validator  = require('../../utils/validator');

const testSchema = {
  string : (val) => typeof val === 'string',
  number : (val) => isNaN(val) ? false : true
};


/* ================================= TESTS ================================= */

describe('Validator utility', () => {

  let validator;

  before(() => {
    validator = new Validator(testSchema);
  });

  it('should be a function', () => {
    assert.isFunction(Validator);
  });

  it('should be a constructor', () => {
    assert.instanceOf(validator, Validator);
  });

  it('instances should have default "schema" property if not passed', () => {
    const defaultValidator = new Validator();
    assert.isObject(defaultValidator.schema);
    assert.isNotEmpty(defaultValidator.schema);
  });

  it('instances should have custom "schema" property if passed', () => {
    assert.isObject(validator.schema);
    assert.hasAllKeys(validator.schema, ['string', 'number']);
  });

  it('instances should have a ".check()" method', () => {
    assert.isFunction(validator.check);
  });

  describe('.check() method', () => {

    it('should return true for valid string "yay"', () => {
      assert.isTrue(validator.check({ string : 'yay' }));
    });

    it('should return true for valid number 123', () => {
      assert.isTrue(validator.check({ number : 123 }));
    });

    it('should return false for invalid string 123', () => {
      assert.isFalse(validator.check({ string : 123 }));
    });

    it('should return flase for invalid number "yay"', () => {
      assert.isFalse(validator.check({ number : 'yay' }));
    });

  });

});