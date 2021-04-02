const router = require('express').Router();
const StatusCodes = require('http-status-codes');

router.all('/', (request, response) => {
  if (Math.floor(Math.random() * 100) + 1 > 50) {
    response.status(StatusCodes.OK).send('Hello World');
  } else {
    throw new Error('Oops');
  }
});

module.exports = router;
