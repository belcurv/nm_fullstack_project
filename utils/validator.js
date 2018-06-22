'use strict';

/* ================================= SETUP ================================= */

const defaultSchema = {
  imdbID : require('./validate_imdbID'),
  title  : require('./validate_title'),
  page   : require('./validate_page')
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
   *  For each key in params, calls corresponding schema method with each value
   *  @param    {Object}   params   Shape { schema_type : value }
   *  @returns  {Boolean}           Returns true if all params are valid
   *  @throws   {Error}             Error specific to failed check
  */
  check(params) {
    for (let key in params) {
      this.schema[key](params[key]);
    }
    return true;
  }

};
