const axios = require('axios');

const { AppError } = require('../../middlewares/errorHandler');
const { SERVER_ERROR, SUCCESS } = require('../../constants/status');
const { INTERNAL_SERVER_ERROR } = require('../../constants/message');
const { customHeader } = require('../../constants/header');
const { RIOT_API_URL } = require('../../config/env.config');

const getSummoner = async (summoner) => {
  try {
    console.log('requestUrl', `${RIOT_API_URL}/lol/summoner/v4/summoners/by-name/${summoner}`);
    console.log('header', customHeader);

    const res = await axios.get(
      `${RIOT_API_URL}/lol/summoner/v4/summoners/by-name/${summoner}`,
      customHeader,
    );

    return res;
  } catch (error) {
    console.error(error);
    if (error.response.status !== 500) {
      throw new AppError(error.response.status, error.response.statusText);
    } else {
      throw new AppError(SERVER_ERROR, INTERNAL_SERVER_ERROR);
    }
  }
};

module.exports = { getSummoner };
