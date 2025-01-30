const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Import your database connection

const AuditLog = sequelize.define('AuditLog', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  action: {
    type: DataTypes.ENUM('INSERT', 'UPDATE', 'DELETE'),
    allowNull: false,
  },
  table_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  record_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  old_value: {
    type: DataTypes.JSON,
    allowNull: true, // No old value for inserts
  },
  new_value: {
    type: DataTypes.JSON,
    allowNull: true, // No new value for deletes
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
}, {
  tableName: 'AuditLogs', // Ensure it matches the MySQL table
  timestamps: false, // We handle timestamps manually
});

module.exports = AuditLog;
