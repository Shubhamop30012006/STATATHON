const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Plfs = sequelize.define('Plfs', {
state: {
type: DataTypes.STRING,
},
gender: {
type: DataTypes.STRING,
},
age: {
type: DataTypes.INTEGER,
},
education: {
type: DataTypes.STRING,
},
employment_status: {
type: DataTypes.STRING,
},
}, {
timestamps: false,
tableName: 'plfs',
});

module.exports = Plfs;