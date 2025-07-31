// Edit server/app.js to include the DB connection:

// server/app.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to DB
const sequelize = require('./config/db');

// Root route
app.get('/', (req, res) => {
res.send('MoSPI API Gateway is running!');
});

module.exports = app;