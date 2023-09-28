const { AppError } = require('../../middlewares/errorHandler');
const { SERVER_ERROR, SUCCESS } = require('../../constants/status');
const { INTERNAL_SERVER_ERROR } = require('../../constants/message');
const { RIOT_API_KEY } = require('../../config/env.config');

const searchService = require('../../services/search/searchService');

const getSummoner = async (req, res, next) => {
  const { summoner } = req.params;

  try {
    const { status, data } = await searchService.getSummoner(summoner);

    res.status(status).json(data);
  } catch (error) {
    console.error(error);
    next(new AppError(error.status, error.message));
  }
};

module.exports = {
  getSummoner,
};
