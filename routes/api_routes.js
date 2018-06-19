'use strict';

/* ================================= SETUP ================================= */

const apiRouter = require('express').Router();
const apiCtrl   = require('../controllers/api.ctrl');


/* ================================ ROUTES ================================= */

apiRouter.route('/movies/search')
  .get(apiCtrl.search);


apiRouter.route('/movies/:imdbID')
  .get(apiCtrl.getOne);


/* ================================ EXPORTS ================================ */

module.exports = apiRouter;