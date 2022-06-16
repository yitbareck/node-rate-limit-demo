const rateLimit = require("express-rate-limit");

const winSize = 60000;
const rate = 10;

const limiter = rateLimit({
  windowMs: winSize,
  max: rate,
  standardHeaders: true,
  legacyHeaders: false,
  message: `You are not allowed to make more than ${rate} requestes in ${
    winSize / 1000
  } seconds`,
});
module.exports = limiter;
