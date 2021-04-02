const Express = require('express');
const BodyParser = require('body-parser');
const Endpoint = require('./endpoints');

const DateValidation = require('./middleware/dateValidation');
const DeleteStatus = require('./middleware/deleteStatus');
const ErrorHandler = require('./middleware/errorHandler');
const WinstonLogger = require('./middleware/winstonLogger');

const app = Express();

app.use(BodyParser.json());
app.use(DeleteStatus);
app.use(DateValidation);
app.use(WinstonLogger);
app.use(Endpoint);
app.use(ErrorHandler);

app.listen(8080);
