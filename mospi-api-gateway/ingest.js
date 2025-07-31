const ingestPlfsCsv = require('./server/utils/ingestCsv');
require('dotenv').config();

(async () => {
await require('./server/config/db').authenticate();
await ingestPlfsCsv();
process.exit();
})();