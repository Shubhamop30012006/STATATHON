// server/middleware/rateLimit.js
const rateLimit = require('express-rate-limit');

// Apply basic rate limiting: 100 requests per 15 minutes per IP
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: 429,
    message: 'Too many requests. Please try again later.'
  }
});

module.exports = apiLimiter;
