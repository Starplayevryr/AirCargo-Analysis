const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Aircraft = require('./Aircraft');  // Adjust the path as per your file structure

const Employee = sequelize.define('Employee', {
  employee_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  f_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  l_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  job_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  aircraft_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Aircraft,  // Model being referenced
      key: 'aircraft_id',  // Column in the Aircraft model
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
     // Automatically delete employees when the associated aircraft is deleted
  },
}, {
  tableName: 'employees',
  timestamps: false,  // Set to true if you need createdAt/updatedAt
});

// Define the relationship between Employee and Aircraft
Employee.belongsTo(Aircraft, {
  foreignKey: 'aircraft_id',
  onDelete: 'CASCADE', // Ensure cascading deletes
});

module.exports = Employee;
