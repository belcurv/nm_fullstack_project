'use strict';

/* ================================= SETUP ================================= */

const defaultSchema = {
  imdbID : require('./validate_imdbID'),
  title  : require('./validate_title')
};


/* ============================ PUBLIC METHODS ============================= */

module.exports = class Validator {

  /** Instantiates validator with either passed-in or default schema
   *  @param    {Object}   schema   Optional custom schema object
  */
  constructor(schema = defaultSchema) {
    this.schema = schema;
  }


  /** Generic data validation Utility
   *  Iterates over params, checking key-value pair each against schema
   *  @param    {Object}   params   Shape { schema_type : value }
   *  @returns  {Boolean}           Returns true if all params are valid
  */
  check(params) {
    for (let key in params) {
      if (!this.schema[key](params[key])) {
        return false;
      }
    }
    return true;
  }

};
