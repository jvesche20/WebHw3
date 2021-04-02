const StatusCodes = require('http-status-codes');

module.exports = (error, req, resp, next) => {
  req.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`We're sorry, the error was: ${error.message}`);
};
