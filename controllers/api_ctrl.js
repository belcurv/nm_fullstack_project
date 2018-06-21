'use strict';

/* ================================= SETUP ================================= */

const Movies = require('../models/movies');


/* ============================ ROUTE HANDLERS ============================= */

/**
 * Get movies from search string
 * Example: GET >> /api/movies/search?title=guardians&page=2
 * Secured: no
 * Expects:
 *    1) 'title' (String) from req.query
 *    2) 'page' (String) from req.query
 * Returns: JSON array of movie objects
*/
const search = (req, res, next) => {
  const title = req.query.title.trim();
  const page  = parseInt(req.query.page, 10) || 1;

  return Movies.search({ title, page })
    .then(data => {
      if (data.Error) {
        return res.status(404).json({ error : data.Error });
      }
      return res.status(200).json(data);
    })
    .catch(err => next(err));
};


/**
 * Get a specific movie by imdbID
 * Example: GET >> /api/movies/tt3896198
 * Secured: no
 * Expects:
 *    1) 'imdbID' (String) from req.params
 * Returns: JSON movie object
*/
const getOne = (req, res, next) => {
  const imdbID = req.params.imdbID.trim();
  return Movies.getOne(imdbID)
    .then(data => {
      if (data.Error) {
        return res.status(404).json({ error : data.Error });
      }
      return res.status(200).json(data);
    })
    .catch(err => next(err));
};


/* ============================== EXPORT API =============================== */

module.exports = { getOne, search };
