const StatusCodes = require('http-status-codes');

const dateKey = 'date-validation';
const time = 300;

function dateVal(obj, date) {
  let total = null;
  Object.keys(obj).forEach((key) => {
    if (key.toLowerCase() === dateKey.toLowerCase()) {
      const num = Number.parseInt(obj[key], 10);
      if (!Number.isNaN(num)) {
        const parsedDate = new Date(num * 1000);
        if (Math.abs(date - parsedDate) / 1000 <= time) {
          total = parsedDate;
        }
      }
    }
  });
  return total;
}
module.exports = (request, response, next) => {
  const headerDate = dateVal(request.headers, new Date());
  const queryDate = dateVal(request.query, new Date());

  const header = headerDate !== null;
  const query = queryDate !== null;

  if ((!header && !query) || (query && header && +headerDate !== +queryDate)) {
    response.sendStatus(StatusCodes.UNAUTHORIZED);
  } else {
    request.dateValidation = query ? headerDate : queryDate;
    next();
  }
};
