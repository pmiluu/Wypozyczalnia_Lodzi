const sequelize = require('./sequelize');

const Client = require('../../model/sequelize/Client');
const Boat = require('../../model/sequelize/Boat');
const Rental = require('../../model/sequelize/Rental');

module.exports = () => {
    Client.hasMany(Rental, { as: 'rentals', foreignKey: { name: 'client_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Rental.belongsTo(Client, { as: 'client', foreignKey: { name: 'client_id', allowNull: false } });
    Boat.hasMany(Rental, { as: 'rentals', foreignKey: { name: 'boat_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Rental.belongsTo(Boat, { as: 'boat', foreignKey: { name: 'boat_id', allowNull: false } });

    let allClients, allBoats;
    return sequelize
        .sync({ force: true })
        .then(() => {
            return Client.findAll();
        })
        .then(clients => {
            if (!clients || clients.length == 0) {
                return Client.bulkCreate([
                    { firstName: 'Pawel', lastName: 'Janowski', email: 'pawel.jan@wp.pl' },
                    { firstName: 'Kuba', lastName: 'Szabla', email: 'szabla@wp.pl' },
                    { firstName: 'Tomek', lastName: 'Nowak', email: 'TomekNowak@wp.pl' },
                ])
                    .then(() => {
                        return Client.findAll();
                    });
            } else {
                return clients;
            }
        })
        .then(clients => {
            allClients = clients;
            return Boat.findAll();
        })
        .then(boats => {
            if (!boats || boats.length == 0) {
                return Boat.bulkCreate([
                    { name: 'Zodiac', seats: 5, year: 2003, price: 5 },
                    { name: 'Alona', seats: 12, year: 2009, price: 10 }
                ])
                    .then(() => {
                        return Client.findAll();
                    });
            } else {
                return boats;
            }
        })
        .then(boats => {
            allBoats = boats;
            return Rental.findAll();
        })
        .then(rentals => {
            if (!rentals || rentals.length == 0) {
                return Rental.bulkCreate([
                    { client_id: allClients[0]._id, boat_id: allBoats[0]._id, dateFrom: '2018-01-01T11:20', dateTo: '2018-01-03T11:20' },
                    { client_id: allClients[1]._id, boat_id: allBoats[1]._id, dateFrom: '2018-02-01T12:30', dateTo: '2018-02-08T12:00' },
                    { client_id: allClients[2]._id, boat_id: allBoats[1]._id, dateFrom: '2018-05-06T13:30', dateTo: '2018-05-08T12:00' }
                ]);
            } else {
                return rentals;
            }
        });
};