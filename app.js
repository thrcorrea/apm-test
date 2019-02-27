process.env.ELASTIC_APM_LOG_LEVEL = 'trace';

const apm = require('elastic-apm-node').start({
  serviceName: 'servico',
});
/* Dependencies */
const express = require('express');

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
const knex = require('knex')(config);

/* Routes */


/* Express initialization */
const app = express();

/* Logger */

/* Express utilites */

/* Log express request and response */

/* Status endpoint */
app.get('/status', function status(req, res) {
  knex.raw('SELECT 1')
    .then((result) => {
      res.sendStatus(204);
    })
});

/* Instatiate routes */

/* Log errors */

app.all('*', (req, res) => {
  res.status(404).send({ success: false, code: '404' });
});

app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
