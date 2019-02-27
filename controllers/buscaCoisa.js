const model = require('../models/status');

function status(req, res) {
  return model.buscaStatus()
    .then((result) => {
      res.sendStatus(204);
    });
}

module.exports = {
  status,
}
