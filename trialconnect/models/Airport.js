const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Assume your database connection is here


const Airport = sequelize.define('Airport', {
    airport_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    airport_name: {
      type: DataTypes.STRING,
      primaryKey: true, // Multiple primary keys for composite key
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'airports',
    timestamps: false, // Remove if createdAt and updatedAt columns are required
    primaryKey: ['airport_id', 'airport_name'], // Composite primary key
  });


  module.exports = Airport;