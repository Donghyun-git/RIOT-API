const { RIOT_API_KEY } = require('../config/env.config');

const customHeader = Object.freeze({
  headers: {
    'X-Riot-Token': RIOT_API_KEY,
  },
});

module.exports = { customHeader };
