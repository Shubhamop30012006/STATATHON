
// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Connect to DB
// const sequelize = require('./config/db');

// // Register routes
// const plfsRoutes = require('./routes/plfsRoutes');
// app.use('/api/plfs', plfsRoutes);

// // Root test route
// app.get('/', (req, res) => {
//   res.send('MoSPI API Gateway is running!');
// });

// module.exports = app;



// server/app.js


// server/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const plfsRoutes = require('./routes/plfsRoutes');
const rateLimit = require('./middleware/rateLimit');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to DB
db.authenticate()
  .then(() => console.log('✅ Connected to PostgreSQL'))
  .catch(err => console.error('❌ DB Connection Error:', err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(rateLimit);

// Routes
app.use('/api/plfs', plfsRoutes);

// Start server only if file is run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

module.exports = app; // ✅ exported for testing or future flexibility
