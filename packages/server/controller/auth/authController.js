const { SUCCESS } = require('../../constants/status');
const { AppError } = require('../../middlewares/errorHandler');

const authService = require('../../services/auth/authService');

const login = async (req, res, next) => {
  const { id, password } = req.body;

  try {
    const { status, data } = await authService.login({ id, password });

    res.status(SUCCESS).json(data);
  } catch (error) {}
};

module.exports = { login };
