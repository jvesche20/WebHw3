// eslint-disable-next-line import/no-unresolved
const Winston = require('winston');

const winstonLogger = Winston.createLogger({
  transports: [
    new Winston.transports.Console({
      format: Winston.format.simple(),
    }),
  ],
});

module.exports = (request, response, next) => {
  winstonLogger.info(`Current epoch time: ${Date.now() / 1000}`);
  winstonLogger.info(`HTTP method: ${request.method}`);
  winstonLogger.info(`URL: ${request.originalUrl}`);
  winstonLogger.info(`Body: ${JSON.stringify(request.body)}`);
  winstonLogger.info(`Query parameters: ${JSON.stringify(request.query)}`);
  winstonLogger.info(`Headers: ${JSON.stringify(request.headers)}`);
  winstonLogger.info(`Date validation: ${request.dateValidation}`);
  next();
};
