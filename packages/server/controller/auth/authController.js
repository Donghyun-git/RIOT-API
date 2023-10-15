const { INTERNAL_SERVER_ERROR } = require('../../constants/message');
const { SUCCESS, SERVER_ERROR } = require('../../constants/status');
const { AppError } = require('../../middlewares/errorHandler');

const authService = require('../../services/auth/authService');

const login = async (req, res, next) => {
  const { id, password } = req.body;

  try {
    const { status, data } = await authService.login({ id, password });

    res.status(SUCCESS).json(data);
  } catch (error) {
    console.error(error);
    return next(new AppError(SERVER_ERROR, INTERNAL_SERVER_ERROR));
  }
};

module.exports = { login };
