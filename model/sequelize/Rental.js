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
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "This field is required"
            }
        }
    },
    boat_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "This field is required"
            }
        }
    },
    dateFrom: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            isDate: {
                msg: "Invalid date"
            }
        }
    },
    dateTo: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {

            isDate: {
                msg: "Invalid date"
            },
            isGreaterThanDateFrom: function (value) {
                if (value < this.dateFrom) {
                    throw new Error("Date from is later than date to");
                }
            }
        }
    }
});

module.exports = Rental;