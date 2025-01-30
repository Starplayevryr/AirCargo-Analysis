// middleware/auditLogger.js

const { AuditLog } = require('../models/Audit_log');  // Import your AuditLog model
const sequelize = require('../config/database');  // Import your Sequelize instance

const auditLogger = async (req, res, next) => {
  // Example of logging an update
  if (req.method === 'POST' || req.method === 'PUT') {
    await AuditLog.create({
      action: req.method === 'POST' ? 'INSERT' : 'UPDATE',
      table_name: req.params.tableName,
      record_id: req.body.id,
      old_value: JSON.stringify(req.body.oldValue),
      new_value: JSON.stringify(req.body.newValue),
      created_at: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  next();
};

module.exports = auditLogger;
