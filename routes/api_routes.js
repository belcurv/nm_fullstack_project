'use strict';

/* ================================= SETUP ================================= */

const apiRouter = require('express').Router();
const apiCtrl   = require('../controllers/api_ctrl');


/* ================================ ROUTES ================================= */

apiRouter.get('/movies/search', apiCtrl.search);

apiRouter.get('/movies/:imdbID', apiCtrl.getOne);


/* ================================ EXPORTS ================================ */

module.exports = apiRouter;