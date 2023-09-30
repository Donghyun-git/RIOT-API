const axios = require('axios');

const { AppError } = require('../../middlewares/errorHandler');
const { SERVER_ERROR, SUCCESS } = require('../../constants/status');
const { INTERNAL_SERVER_ERROR } = require('../../constants/message');
const { customHeader } = require('../../constants/header');
const { RIOT_API_URL } = require('../../config/env.config');

const login = async (user) => {
  const { id, password } = user;

  try {
    // db find 로직 필요
  } catch (error) {
    console.error(error);
    throw new AppError(SERVER_ERROR, INTERNAL_SERVER_ERROR);
  }
};

module.exports = { login };
