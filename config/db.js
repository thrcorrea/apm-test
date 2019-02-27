let config = null;

config = {
  client: 'mysql2',
  debug: false,
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'seedProject',
    supportBigNumbers: true,
    bigNumberStrings: true,
    multipleStatements: true,
    timezone: 'UTC',
    dateStrings: true,
  },
  pool: {
    min: parseInt(process.env.DB_POOL_MIN || 0, 10),
    max: parseInt(process.env.DB_POOL_MAX || 1, 10),
  },
};

// main connections
const main = require('knex')(config);

module.exports = {
  knex: main,
  raw: main.raw, // alias to knex.raw
};
