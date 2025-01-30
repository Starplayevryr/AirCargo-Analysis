const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Adjust path to your database configuration
const Aircraft = require('./Aircraft');  // Adjust path as needed

const Route = sequelize.define('Route', {
  route_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  origin_airport: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dest_port: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  flightnum: {
    type: DataTypes.INTEGER,
    references: {
      model: Aircraft,  // Referencing Aircraft model
      key: 'aircraft_id',  // Ensure aircraft_id is correctly defined in the Aircraft model
    },
    allowNull: false,
    onDelete: 'CASCADE',  
      onUpdate: 'CASCADE'
  },
  distance_miles: {
    type: DataTypes.FLOAT,  // Allows storing distances with decimal points
    allowNull: false,
  },
});


module.exports = Route;
