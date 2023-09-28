class AppError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
}

const errorHandler = (err, req, res, next) => {
  const { status, message } = err;
  console.log(status, message);
  res.status(status || 500).json({
    status: 'error',
    status: status || 500,
    message: message || 'Internal Server Error',
  });
};

module.exports = {
  AppError,
  errorHandler,
};
