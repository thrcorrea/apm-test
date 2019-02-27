const { knex } = require('../config/db');

function buscaStatus() {
  return knex.from('user').select('*');
}


module.exports = {
  buscaStatus,
}
