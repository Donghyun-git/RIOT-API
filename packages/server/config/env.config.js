const dotEnv = require('dotenv');
dotEnv.config();

module.exports = {
  PORT: process.env.PORT,
  RIOT_API_URL: process.env.RIOT_API_URL,
  RIOT_API_KEY: process.env.RIOT_API_KEY,
  // DB_HOST: process.env.DB_HOST,
  // DB_NAME: process.env.DB_NAME,
};
