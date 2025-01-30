const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Adjust path to your database configuration
const Customer = require('./Customer');  // Adjust path as needed
const Aircraft = require('./Aircraft');  // Adjust path as needed

const PassengersOnFlight = sequelize.define('PassengersOnFlight', {
  passenger_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  customer_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Customer,  // Referencing Customer model
      key: 'customer_id',
      onDelete: 'CASCADE',  // Delete related rows in PassengersOnFlight when the referenced row in Customer is deleted
      onUpdate: 'CASCADE',  // Update related rows in PassengersOnFlight when the referenced row in Customer is updated
    },
    allowNull: false,
  },
  flight_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Aircraft,  // Referencing Aircraft model
      key: 'aircraft_id',
      onDelete: 'CASCADE',  // Delete related rows in PassengersOnFlight when the referenced row in Aircraft is deleted
      onUpdate: 'CASCADE',  // Update related rows in PassengersOnFlight when the referenced row in Aircraft is updated
    },
    allowNull: false,
  },
  seat_num: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  travel_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
}, {
  tableName: 'passengers_on_flight',
  timestamps: false,  // Disable timestamps if not required
});

module.exports = PassengersOnFlight;
