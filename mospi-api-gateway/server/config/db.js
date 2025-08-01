// This connects Sequelize to your PostgreSQL DB:

// server/config/db.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
process.env.DB_NAME,
process.env.DB_USER,
process.env.DB_PASSWORD,
{
host: process.env.DB_HOST,
dialect: process.env.DB_DIALECT,
port: process.env.DB_PORT,
logging: false,
}
);

sequelize.authenticate()
.then(() => console.log('✅ Database connected.'))
.catch((err) => console.error('❌ Database connection error:', err));

module.exports = sequelize;