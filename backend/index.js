const express = require('express');
const consign = require('consign');
const db = require('./config/db');

const app = express();

app.db = db;

consign()
    .then('./config/middlewares.js')
    .then('./api/validate.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app);

app.listen(2120, () => {
    console.log(`Backend started at http://localhost:2120`);
});
