const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  admin_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true, // Automatically increment ID
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensures no two users have the same username
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensures no two users have the same email
    validate: {
      isEmail: true, // Validates that the value is a valid email format
    }},
  password: {
    type: DataTypes.STRING,
    allowNull: false, // Password is required
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false, // Define the role (e.g., 'admin', 'editor', etc.)
    defaultValue: "admin", // Default role is 'admin'
  },
});

module.exports = User;
