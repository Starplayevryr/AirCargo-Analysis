const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Customer = sequelize.define("Customer", {
  customer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
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
  date_of_birth: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,  // Ensures no duplicate emails
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: true, // Phone number is optional
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true, // Address is optional
  },
}, {
  timestamps: true, // automatically adds createdAt and updatedAt fields
  tableName: "Customers", // Custom table name
});

module.exports = Customer;
