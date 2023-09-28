const statusCode = Object.freeze({
  SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHROIZATED: 401,
  NOT_PARAM: 400,
  NOT_FOUND: 404,
  NO_CONTENT: 204,
  CREATED: 201,
  SUCCESS: 200,
});

module.exports = statusCode;
