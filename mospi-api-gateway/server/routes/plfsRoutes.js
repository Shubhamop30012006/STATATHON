// server/routes/plfsRoutes.js
const express = require('express');
const router = express.Router();
const { getFilteredPlfs } = require('../controllers/plfsController');

router.get('/', getFilteredPlfs);

module.exports = router;
