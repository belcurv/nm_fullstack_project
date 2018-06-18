'use strict';

/* ================================= SETUP ================================= */

const staticRouter = require('express').Router();
const staticCtrl   = require('../controllers/static.ctrl');


/* ================================ ROUTES ================================= */

staticRouter.get('/', staticCtrl.serveClient);


/* ================================ EXPORT ================================= */

module.exports = staticRouter;
