'use strict';

/* ================================= SETUP ================================= */

const apiRouter = require('express').Router();
const omdbCtrl  = require('../controllers/omdb.ctrl');


/* ================================ ROUTES ================================= */

apiRouter.route('/movies')
  .get(omdbCtrl.getAll);


apiRouter.route('/movies/:imdbID')
  .get(omdbCtrl.getOne);


apiRouter.route('/movies/search')
  .get(omdbCtrl.search);


/* ================================ EXPORTS ================================ */

module.exports = apiRouter;