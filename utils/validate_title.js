'use strict';

/* ============================ PUBLIC METHODS ============================= */

/** Validate movie titles
 *  A valid title should
 *    1. Be a string
 *    2. Consist of at least 1 alphanumeric character
 *    3. Optionally contain single spaces between words
 *    4. Optionally contain surrounding double quotes
 *    5. Consist of no more than 100 total characters
 *  @param    {String}   title   Candidate movie title
 *  @returns  {Boolean}          True if title is valid
 *  @throws   {Error}            Throws if title is missing or invalid
*/
module.exports = function validateTitle(title) {
  const titleRegex = /^"?((\w+\s)*\w+){1,100}"?$/;

  if (typeof title === 'undefined') {
    throw new Error('Missing required "title" parameter');
  }

  if (typeof title !== 'string' || !titleRegex.test(title)) {
    throw new Error(`Validation Error: Invalid "title": ${title}`);
  }

  return true;
};
