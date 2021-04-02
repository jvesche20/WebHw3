const express = require('express');
const BodyParser = require('body-parser');
const Endpoint = require('./endpoint');
const CatchError = require('./middleware/catchError');
const DateValidation = require('./middleware/dateValidation');
const DeleteStatus = require('./middleware/deleteStatus');
const Logger = require('./middleware/logger');

const app = express();

app.use(BodyParser.json());
app.use(DeleteStatus);
app.use(DateValidation);
app.use(Logger);
app.use(Endpoint);
app.use(CatchError);

app.listen(8080);
