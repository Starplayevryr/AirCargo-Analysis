const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Adjust path to your database configuration
const Passenger = require('./Passengers_on_flight');  // Adjust path to your Passenger model
const Aircraft = require('./Aircraft');  // Adjust path to your Aircraft model
const Route = require('./Routes');  // Adjust path to your Route model

const Ticket_details = sequelize.define('Booking', {
  booking_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  passenger_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Passenger,
      key: 'passenger_id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    allowNull: false,
  },
  flight_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Aircraft,
      key: 'aircraft_id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    allowNull: false,
  },
  route_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Route,
      key: 'route_id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    allowNull: false,
  },
  seat_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  class: {
    type: DataTypes.ENUM('Economy', 'Business', 'First Class'),
    allowNull: false,
  },
  booking_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,  // Automatically set to the current date
  },
  status: {
    type: DataTypes.ENUM('Confirmed', 'Cancelled'),
    allowNull: false,
    defaultValue: 'Confirmed',
  },
  payment_cost: {
    type: DataTypes.FLOAT,  // Use FLOAT to store the cost with decimal values
    allowNull: false,       // You can set it to true if it's optional
  }
}, {
  tableName: 'ticket_details',  // Table name in your database
  timestamps: false,      // Disable automatic timestamps if not required
});

module.exports = Ticket_details; 