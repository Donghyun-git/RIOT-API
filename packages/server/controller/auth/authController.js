const { AppError } = require('../../middlewares/errorHandler');

const authService = require('../../services/auth/authService');

const login = async (req, res, next) => {
  const { id, password } = req.body;

  try {
    const { status, data } = await authService.login({ id, password });
  }catch(error) {

  }
}

const 

module.exports = { login }