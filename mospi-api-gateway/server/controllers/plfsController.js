// // server/controllers/plfsController.js
// const Plfs = require('../models/Plfs');
// const { Op } = require('sequelize');

// const getFilteredPlfs = async (req, res) => {
//   try {
//     const { state, gender, min_age, max_age } = req.query;

//     // Build dynamic filter object
//     const whereClause = {};
//     if (state) whereClause.state = state;
//     if (gender) whereClause.gender = gender;
//     if (min_age || max_age) {
//       whereClause.age = {};
//       if (min_age) whereClause.age[Op.gte] = parseInt(min_age);
//       if (max_age) whereClause.age[Op.lte] = parseInt(max_age);
//     }

//     const results = await Plfs.findAll({ where: whereClause });
//     res.status(200).json({ count: results.length, data: results });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// module.exports = {
//   getFilteredPlfs,
// };



// server/controllers/plfsController.js
const Plfs = require('../models/Plfs');
const { Op } = require('sequelize');
const { Parser } = require('json2csv');

async function getFilteredPlfs(req, res) {
  console.log('\n🔥 [plfsController] Query params:', req.query);

  const { state, gender, min_age, max_age, format } = req.query;
  console.log('🔥 [plfsController] format param:', format);

  try {
    const where = {};
    if (state) where.state = state;
    if (gender) where.gender = gender;
    if (min_age || max_age) {
      where.age = {};
      if (min_age) where.age[Op.gte] = parseInt(min_age, 10);
      if (max_age) where.age[Op.lte] = parseInt(max_age, 10);
    }

    const rows = await Plfs.findAll({ where });
    const jsonData = rows.map(r => r.toJSON());

    if (format && format.toLowerCase() === 'csv') {
      console.log('🔥 [plfsController] Generating CSV…');
      const fields = ['state','gender','age','education','employment_status'];
      const csv = new Parser({ fields }).parse(jsonData);

      res.setHeader('Content-Disposition', 'attachment; filename=plfs_results.csv');
      res.setHeader('Content-Type', 'text/csv');
      return res.status(200).send(csv);
    }

    console.log('🔥 [plfsController] Returning JSON…');
    return res.status(200).json({ count: jsonData.length, data: jsonData });
  } catch(err) {
    console.error('❌ [plfsController] Error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
}

module.exports = { getFilteredPlfs };
