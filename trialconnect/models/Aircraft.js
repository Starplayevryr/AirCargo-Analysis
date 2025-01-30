const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Assume your database connection is here

const Aircraft = sequelize.define('Aircraft', {
  aircraft_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,  // Enables createdAt and updatedAt automatically
});

module.exports = Aircraft;
