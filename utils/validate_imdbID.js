'use strict';

/* ============================ PUBLIC METHODS ============================= */

/** Validate imdbID
 *  A valid imdb ID should
 *    1. Be a string
 *    2. Begin with 'tt'
 *    3. Followed by 7 integers
 *  @param    {String}   imdbID   Candidate imdb ID
 *  @returns  {Boolean}           True if valid
*/
module.exports = function validateImdbID(imdbID) {

  if (typeof imdbID !== 'string') { return false; }

  const imdbIDRegex = /^tt\d{7}$/;
  return !imdbID ? false : imdbIDRegex.test(imdbID);

};
