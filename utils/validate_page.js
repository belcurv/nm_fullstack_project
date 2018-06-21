'use strict';

/* ============================ PUBLIC METHODS ============================= */

/** Validate page numbers
 *  A valid page number should
 *    1. Be an integer greater than or equal to 1
 *  @param    {Number}    page   Candidate page number
 *  @returns  {Boolean}          True if page is valid
 *  @throws   {Error}            Throws if page is missing or invalid
*/
module.exports = function validatePage(page) {

  if (typeof page === 'undefined') {
    throw new Error('Missing required "page" parameter');
  }

  if (!Number.isInteger(page) || page < 1) {
    throw new Error(`Validation Error: Invalid "page": ${page}`);
  }

  return true;
};
