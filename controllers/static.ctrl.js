'use strict';

/* ================================= SETUP ================================= */

const path = require('path');


/* ============================ ROUTE HANDLERS ============================= */

function serveClient(req, res) {
  res.status(200)
    .sendFile(path.join(__dirname, '../client/dist/index.html'));
}


/* ============================== EXPORT API =============================== */

module.exports = { serveClient };