const fs = require('fs');
const path = require('path');
const sequelize = require('../config/database'); // Sequelize instance
const Sequelize = require('sequelize'); // Import Sequelize for DataTypes
const { AuditLog } = require('../models/Audit_log');  // Import AuditLog model

// Import other models
const Aircraft = require('./Aircraft');  // Path to your Aircraft model
const Route = require('./Routes');        // Path to your Route model
const Passenger = require('./Passengers_on_flight'); // Path to your Passenger model
const TicketDetails = require('./Bookingdetails'); // Path to your TicketDetails model
const Employee = require('./Employees');
const Cargo = require('./Cargo');
const Airport = require('./Airport');

// Associations
TicketDetails.belongsTo(Aircraft, { foreignKey: 'aircraft_id' });
TicketDetails.belongsTo(Route, { foreignKey: 'route_id' });
TicketDetails.belongsTo(Passenger, { foreignKey: 'passenger_id' });

Passenger.hasMany(TicketDetails, { foreignKey: 'passenger_id' });
Employee.belongsTo(Aircraft, { foreignKey: 'aircraft_id' });
Route.belongsTo(Aircraft, { foreignKey: 'flightnum', as: 'aircraft' });

Aircraft.hasMany(TicketDetails, { foreignKey: 'flight_id' });
Route.hasMany(TicketDetails, { foreignKey: 'route_id' });

Cargo.belongsTo(Airport, {
  foreignKey: 'origin_airport_id',
  as: 'originAirport'
});
Cargo.belongsTo(Airport, {
  foreignKey: 'destination_airport_id',
  as: 'destinationAirport'
});
Airport.hasMany(Cargo, {
  foreignKey: 'origin_airport_id',
  as: 'originCargos'
});
Airport.hasMany(Cargo, {
  foreignKey: 'destination_airport_id',
  as: 'destinationCargos'
});

Employee.belongsTo(Aircraft, { foreignKey: 'aircraft_id' });
Aircraft.hasMany(Employee, { foreignKey: 'aircraft_id' });

// Dynamically import all models
const models = {
  Aircraft,
  Route,
  Passenger,
  TicketDetails,
  Employee,
  Cargo,
  Airport,
};

// Add hooks for all models for audit log
Object.values(models).forEach((model) => {
  const modelName = model.name;

  model.afterCreate(async (instance, options) => {
    const userId = 1; // Get the actual user ID dynamically

    await AuditLog.create({
      action: 'INSERT',
      table_name: modelName.toLowerCase(),  // Lowercase table name
      record_id: instance.id,  // Assuming the ID field is named 'id'
      old_value: null,  // No old value for INSERT
      new_value: JSON.stringify(instance),  // The new data
      user_id: userId,  // User ID who performed the action
    });
  });

  model.afterUpdate(async (instance, options) => {
    const userId = 1; // Get the actual user ID dynamically

    const oldValues = JSON.stringify(options.previous);
    const newValues = JSON.stringify(instance);

    await AuditLog.create({
      action: 'UPDATE',
      table_name: modelName.toLowerCase(),
      record_id: instance.id,
      old_value: oldValues,
      new_value: newValues,
      user_id: userId,
    });
  });

  model.afterDestroy(async (instance, options) => {
    const userId = 1; // Get the actual user ID dynamically

    await AuditLog.create({
      action: 'DELETE',
      table_name: modelName.toLowerCase(),
      record_id: instance.id,
      old_value: JSON.stringify(instance),
      new_value: null,
      user_id: userId,
    });
  });
});

module.exports = models;
