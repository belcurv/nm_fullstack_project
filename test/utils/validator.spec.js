'use strict';

/* ================================= SETUP ================================= */

const { assert } = require('chai');
const Validator  = require('../../utils/validator');

function checkString(val) {
  if (typeof val !== 'string') {
    throw new Error(`Invalid "string": ${val}`);
  }
  return true;
}

function checkNumber(val) {
  if (typeof val !== 'number') {
    throw new Error(`Invalid "number": ${val}`);
  }
  return true;
}

const testSchema = {
  string : checkString,
  number : checkNumber
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

    it('should throw exception for invalid string 123', () => {
      const call = function() {
        validator.check({ string : 123 });
      };
      assert.throws(call, 'Invalid "string": 123');
    });


    it('should throw exception for invalid number "nope"', () => {
      const call = function() {
        validator.check({ number : 'nope' });
      };
      assert.throws(call, 'Invalid "number": nope');
    });

  });

});