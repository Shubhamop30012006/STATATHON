// // server/middleware/auth.js

// // Simulated API key-to-role mapping
// const API_KEYS = {
//   'admin-key-123': 'admin',
//   'public-key-456': 'public',
// };

// function roleMiddleware(req, res, next) {
//   const key = req.headers['x-api-key'];

//   if (!key || !API_KEYS[key]) {
//     return res.status(401).json({ message: 'Missing or invalid API key' });
//   }

//   req.userRole = API_KEYS[key]; // attach role to request
//   next();
// }

// module.exports = roleMiddleware;


// server/middleware/auth.js

const API_KEYS = {
  'admin-key-123': 'admin',
  'public-key-456': 'public',
};

function roleMiddleware(req, res, next) {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || !API_KEYS[apiKey]) {
    return res.status(401).json({ message: 'Unauthorized: Invalid or missing API key' });
  }

  req.userRole = API_KEYS[apiKey];
  next();
}

module.exports = roleMiddleware;
