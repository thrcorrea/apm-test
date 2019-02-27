process.env.ELASTIC_APM_LOG_LEVEL = 'trace';

const apm = require('elastic-apm-node').start({
  serviceName: 'service',
});
/* Dependencies */
const express = require('express');

// main connections
const { knex } = require('./config/db');

/* Routes */


/* Express initialization */
const app = express();

/* Logger */

/* Express utilites */

/* Log express request and response */

/* Status endpoint */
app.get('/status', async function status(req, res) {
  await knex.raw('SELECT 1');
  res.sendStatus(204);
});

/* Instatiate routes */

/* Log errors */

app.all('*', (req, res) => {
  res.status(404).send({ success: false, code: '404' });
});

app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
