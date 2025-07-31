// // server/routes/plfsRoutes.js
// const express = require('express');
// const router = express.Router();
// const { getFilteredPlfs } = require('../controllers/plfsController');

// router.get('/', getFilteredPlfs);

// module.exports = router;


// server/routes/plfsRoutes.js
const express = require('express');
const router = express.Router();
const { getFilteredPlfs } = require('../controllers/plfsController');
const roleMiddleware = require('../middleware/auth');

router.get('/', roleMiddleware, getFilteredPlfs);

module.exports = router;
