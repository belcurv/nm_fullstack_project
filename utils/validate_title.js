'use strict';

/* ============================ PUBLIC METHODS ============================= */

/** Validate movie titles
 *  A valid title should
 *    1. Be a string
 *    2. Consist of at least 1 alphanumeric character
 *    3. Consist of no more than 100 alphanumeric characters
 *  @param    {String}   title   Candidate movie title
 *  @returns  {Boolean}          True if title is valid
 *  @throws   {Error}            Throws if title is missing or invalid
*/
module.exports = function validateTitle(title) {
  const titleRegex = /^"?(\w{1,100}|\s?)"?$/;

  if (typeof title === 'undefined') {
    throw new Error('Missing required "title" parameter');
  }

  if (typeof title !== 'string' || !titleRegex.test(title)) {
    throw new Error(`Validation Error: Invalid "title": ${title}`);
  }

  return true;
};
