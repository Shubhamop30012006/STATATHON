// server/controllers/plfsController.js
const Plfs = require('../models/Plfs');
const { Op } = require('sequelize');

const getFilteredPlfs = async (req, res) => {
  try {
    const { state, gender, min_age, max_age } = req.query;

    // Build dynamic filter object
    const whereClause = {};
    if (state) whereClause.state = state;
    if (gender) whereClause.gender = gender;
    if (min_age || max_age) {
      whereClause.age = {};
      if (min_age) whereClause.age[Op.gte] = parseInt(min_age);
      if (max_age) whereClause.age[Op.lte] = parseInt(max_age);
    }

    const results = await Plfs.findAll({ where: whereClause });
    res.status(200).json({ count: results.length, data: results });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getFilteredPlfs,
};
