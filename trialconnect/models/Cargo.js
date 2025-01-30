const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Airport = require('../models/Airport');

const Cargo = sequelize.define('Cargo', {
    cargoID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    weight: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isFloat: true,
            min: 0.1
        }
    },
    destination: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 255]
        }
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Pending',
        validate: {
            isIn: [['Pending', 'In Transit', 'Delivered']]
        }
    },
    trackingNumber: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
        validate: {
            len: [10, 20]
        }
    },
    cargoType: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isIn: [['Fragile', 'Non-Fragile', 'Perishable']]
        }
    },
    originAirportID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Airport,  // Refers to the Airports table
            key: 'airport_id'  // Refers to the airport_id column in the Airports table
        }
    },
    destinationAirportID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Airport,  // Refers to the Airports table
            key: 'airport_id'  // Refers to the airport_id column in the Airports table
        }
    },
    arrivalDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    shippingCost: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    departureDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    estimatedDeliveryDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'cargo',
    underscored: true  // Ensures snake_case in DB columns (origin_airport_id, etc.)
});

module.exports = Cargo;
