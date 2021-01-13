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
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "This field is required"
            },
            len: {
                args: [2, 60],
                msg: "This field must contain 2-60 characters"
            }
        }
    },
    seats: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "This field is required"
            },
            isInt: {
                msg: "This field must be integer"
            },
            max: 100,
            min: 1

        }
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "This field is required"
            },
            isInt: {
                msg: "This field must be integer"
            },
            min: 1900

        }
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "This field is required"
            },
            isDecimal: {
                msg: "This field must be number"
            },
            min: 0

        }
    }
});

module.exports = Boat;