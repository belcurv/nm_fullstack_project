'use strict';

/* ================================= SETUP ================================= */

const Movies = require('../models/movies');


/* ============================ ROUTE HANDLERS ============================= */

/**
 * Get all movies
 * Example: GET >> /api/movies
 * Secured: no
 * Expects: null
 * Returns: JSON array of movie objects
*/
const getAll = (req, res, next) => {
  return Movies.getAll()
    .then(movies => res.status(200).json(movies))
    .catch(err => next(err));

};


/**
 * Get a specific movie by imdbID
 * Example: GET >> /api/movies/tt3896198
 * Secured: no
 * Expects:
 *    1) movie imdbID from req params
 * Returns: JSON movie object
*/
const getOne = (req, res, next) => {
  return Movies.getOne(req.params.imdbID)
    .then(movie => res.status(200).json(movie))
    .catch(err => next(err));
};


/**
 * Get movies from search string
 * Example: GET >> /api/movies/search
 * Secured: no
 * Expects:
 *    1) query string from req.query
 * Returns: JSON array of movie objects
*/
const search = (req, res, next) => {
  return Movies.search(req.query)
    .then(movies => res.status(200).json(movies))
    .catch(err => next(err));
};




/* ============================== EXPORT API =============================== */

module.exports = { getAll, getOne, search };
