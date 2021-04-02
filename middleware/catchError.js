const StatusCodes = require('http-status-codes');

// eslint-disable-next-line no-unused-vars
module.exports = (error, request, response, next) => {
  response.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`We're sorry, the error was: ${error.message}`);
};
