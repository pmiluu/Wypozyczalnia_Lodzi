const Sequelize = require('sequelize');

const sequelize = new Sequelize('tin-wypozyczalnia-lodzi', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    timezone: '+01:00' //for writing to database
});

module.exports = sequelize;