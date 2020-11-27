const config = require('../knexfile');
const knex = require('knex')({ client: 'postgresql' }, config);


knex.migrate.latest([config]);
module.exports = knex;