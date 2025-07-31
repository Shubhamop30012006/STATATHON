const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const Plfs = require('../models/Plfs');

async function ingestPlfsCsv() {
const results = [];

return new Promise((resolve, reject) => {
fs.createReadStream(path.join(__dirname, '../../datasets/plfs_sample.csv'))
.pipe(csv())
.on('data', (data) => results.push(data))
.on('end', async () => {
try {
await Plfs.sync({ force: true }); // recreate table
await Plfs.bulkCreate(results);
console.log('✅ PLFS data ingested successfully.');
resolve();
} catch (err) {
console.error('❌ Error inserting data:', err);
reject(err);
}
});
});
}

module.exports = ingestPlfsCsv;