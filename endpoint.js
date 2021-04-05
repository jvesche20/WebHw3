const router = require('express').Router();

router.all('/', (request, response) => {
  if (Math.floor(Math.random() * 100) + 1 > 50) {
    response.send('Hello World');
  } else {
    throw new Error('Oops');
  }
});

module.exports = router;
