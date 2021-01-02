const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Rental = sequelize.define('Rental', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    client_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    boat_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    dateFrom: {
        type: Sequelize.DATE,
        allowNull: false
    },
    dateTo: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

module.exports = Rental;