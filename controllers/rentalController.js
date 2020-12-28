const RentalRepository = require('../repository/sequelize/RentalRepository');
const BoatRepository = require('../repository/sequelize/BoatRepository');
const ClientRepository = require('../repository/sequelize/ClientRepository');

exports.showRentalList = (req, res, next) => {
    RentalRepository.getRentals()
        .then(rentals => {
            res.render('pages/rental/rental-list', {
                rentals: rentals,
                navLocation: 'rental'
            });
        });
}
exports.showAddRentalForm = (req, res, next) => {
    let allClients, allBoats;
    ClientRepository.getClients()
        .then(cnts => {
            allClients = cnts;
            return BoatRepository.getBoats();
        })
        .then(bts => {
            allBoats = bts;
            res.render('pages/rental/rental-form', {
                rental: {},
                formMode: 'createNew',
                allClients: allClients,
                allBoats: allBoats,
                pageTitle: 'New rentals',
                btnLabel: 'Add rental',
                formAction: '/rentals/add',
                navLocation: 'rental'
            });
        });
}




exports.showRentalDetails = (req, res, next) => {
    res.render('pages/rental/rental-details', { navLocation: 'rental' });
}