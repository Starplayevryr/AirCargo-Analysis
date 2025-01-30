const { Sequelize } = require("sequelize");

// Update with your database details
const sequelize = new Sequelize("aircargo", "root", "1234", {
  host: "localhost",
  dialect: "mysql", 
  timezone: 'Asia/Kolkata'// Or other dialects like 'postgres', 'sqlite', etc.
});

module.exports = sequelize;
