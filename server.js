'use strict';

/* ================================= SETUP ================================= */

require('dotenv').config();
const path       = require('path');
const express    = require('express');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const app        = express();
const cors       = require('cors');
const port       = process.env.PORT || 3000;


/* ================================ CONFIG ================================= */

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.static(path.join(__dirname, '/client/')));

// routes
app.use('/api', require('./routes/api_routes'));
app.use('/',    require('./routes/static_routes'));

// generic error handler
app.use(function (err, req, res, next) {
  console.log('Error: ' + err.message);
  res.status(500).json({ Response : false, message : 'Something broke'});
  next();
});


/* ================================ STARTUP ================================ */

app.listen(port, () => console.log(`Listening on port ${port}`));