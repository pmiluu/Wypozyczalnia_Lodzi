const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Boat = sequelize.define('Boat', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    seats: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});

module.exports = Boat;