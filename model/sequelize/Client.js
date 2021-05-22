const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Client = sequelize.define('Client', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
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
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
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
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "This field is required"
            },
            len: {
                args: [5, 60],
                msg: "This field must contain 5-60 characters"
            },
            isEmail: {
                msg: "Invalid e-mail address"
            }
        }
    }
});

module.exports = Client;