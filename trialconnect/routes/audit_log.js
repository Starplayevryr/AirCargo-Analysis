// routes/auditLogRoutes.js
const express = require('express');
const { Sequelize } = require('sequelize');
const AuditLog = require('../models/Audit_log'); // Assuming AuditLog model is already defined
const sequelize = require('../config/database'); 
const router = express.Router();

/*// Fetch audit logs with sorting, filtering, and pagination
router.get('/', async (req, res) => {
  try {
    // Retrieve query parameters for filtering, sorting, and pagination
    const { tableName, action, startDate, endDate, page = 1, limit = 10, sortBy = 'created_at', sortOrder = 'DESC' } = req.query;

    // Build the query options
    const options = {
      where: {},
      order: [[sortBy, sortOrder]], // Sort by created_at (you can change the sorting criteria)
      limit: parseInt(limit), // Limit the number of records
      offset: (page - 1) * limit, // Pagination offset
    };

    // Filter by table_name if provided
    if (tableName) {
      options.where.table_name = tableName;
    }

    // Filter by action type (INSERT, UPDATE, DELETE)
    if (action) {
      options.where.action = action;
    }

    // Filter by date range if provided
    if (startDate && endDate) {
      options.where.created_at = {
        [Sequelize.Op.between]: [new Date(startDate), new Date(endDate)],
      };
    }

    // Fetch the audit logs from the database
    const auditLogs = await AuditLog.findAll(options);

    // Send the result as JSON with pagination info
    res.json({
      data: auditLogs,
      page: parseInt(page),
      limit: parseInt(limit),
      total: await AuditLog.count(options.where), // Get total count for pagination
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ error: 'Error fetching audit logs' });
  }
});
*/
// Fetch all audit logs with sorting and filtering
router.get('/', async (req, res) => {
  try {
    const { tableName, action, startDate, endDate, page = 1, limit = 10 } = req.query;

    // Build query options for filtering, sorting, and pagination
    const options = {
      where: {},
      order: [['created_at', 'DESC']], // Sort by created_at in descending order
      limit: parseInt(limit),
      offset: (page - 1) * limit,
    };

    // Filter by table name if provided
    if (tableName) {
      options.where.table_name = tableName;
    }

    // Filter by action type (INSERT, UPDATE, DELETE)
    if (action) {
      options.where.action = action;
    }

    // Filter by date range if provided
    if (startDate && endDate) {
      options.where.created_at = {
        [Sequelize.Op.between]: [new Date(startDate), new Date(endDate)],
      };
    }

    // Fetch audit logs from the database
    const auditLogs = await AuditLog.findAll(options);

    // Count the total number of logs for pagination
    const totalLogs = await AuditLog.count(options);

    // Send response with the fetched data and pagination info
    res.json({
      data: auditLogs,
      total: totalLogs,
      page: parseInt(page),
      limit: parseInt(limit),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching audit logs' });
  }
});

router.get('/tables', async (req, res) => {
  try {
    // Query to show tables in the database
    const [results, metadata] = await sequelize.query("SHOW TABLES");
    const tables = results.map((result) => Object.values(result)[0]); // Extract table names
    res.json({ tables }); // Return table names as a response
  } catch (error) {
    console.error('Error fetching tables:', error);
    res.status(500).json({ error: 'Error fetching tables' });
  }
});
module.exports = router;
