const Sequelize = require('sequelize');

const sequelize = new Sequelize('tin-wypozyczalnia-lodzi', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;