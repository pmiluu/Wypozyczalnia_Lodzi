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
                rent: {},
                formMode: 'createNew',
                allClients: allClients,
                allBoats: allBoats,
                pageTitle: 'New rental',
                btnLabel: 'Add rental',
                formAction: '/rentals/add',
                navLocation: 'rental'
            });
        });
}

exports.showEditRentalForm = (req, res, next) => {
    const rentId = req.params.rentId;
    let allClients, allBoats;

    ClientRepository.getClients()
        .then(cnts => {
            allClients = cnts;
            return BoatRepository.getBoats();
        })
        .then(bts => {
            allBoats = bts;
            return RentalRepository.getRentalById(rentId);

        })
        .then(rent => {
            res.render('pages/rental/rental-form', {
                rent: rent,
                formMode: 'edit',
                allClients: allClients,
                allBoats: allBoats,
                pageTitle: 'Edit rental',
                btnLabel: 'Edit rental',
                formAction: '/rentals/edit',
                navLocation: 'rental'
            });
        });
}


exports.showRentalDetails = (req, res, next) => {
    const rentId = req.params.rentId;
    let allClients, allBoats;

    ClientRepository.getClients()
        .then(cnts => {
            allClients = cnts;
            return BoatRepository.getBoats();
        })
        .then(bts => {
            allBoats = bts;
            return RentalRepository.getRentalById(rentId);

        })
        .then(rent => {
            res.render('pages/rental/rental-form', {
                rent: rent,
                formMode: 'showDetails',
                allClients: allClients,
                allBoats: allBoats,
                pageTitle: 'Rental details',
                formAction: '',
                navLocation: 'rental'
            });
        });
}


exports.addRental = (req, res, next) => {
    const rentData = { ...req.body };
    RentalRepository.createRental(rentData)
        .then(result => {
            res.redirect('/rentals');
        });
};

exports.updateRental = (req, res, next) => {
    const rentId = req.body._id;
    const rentData = { ...req.body };
    RentalRepository.updateRental(rentId, rentData)
        .then(result => {
            res.redirect('/rentals');
        });
};

exports.deleteRental = (req, res, next) => {
    const rentId = req.params.rentId;
    RentalRepository.deleteRental(rentId)
        .then(() => {
            res.redirect('/rentals');
        });
};