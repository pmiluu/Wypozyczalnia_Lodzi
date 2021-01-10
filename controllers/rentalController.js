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
    const validationErrors = [];
    ClientRepository.getClients()
        .then(cnts => {
            allClients = cnts;
            return BoatRepository.getBoats();
        })
        .then(bts => {
            allBoats = bts;
            res.render('pages/rental/rental-form', {
                rent: {},
                rentData: {},
                formMode: 'createNew',
                allClients: allClients,
                allBoats: allBoats,
                pageTitle: 'New rental',
                btnLabel: 'Add rental',
                formAction: '/rentals/add',
                navLocation: 'rental',
                validationErrors: validationErrors
            });

        });
}

exports.showEditRentalForm = (req, res, next) => {
    const rentId = req.params.rentId;
    let allClients, allBoats;
    const validationErrors = [];

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
                rentData: {},
                formMode: 'edit',
                allClients: allClients,
                allBoats: allBoats,
                pageTitle: 'Edit rental',
                btnLabel: 'Edit rental',
                formAction: '/rentals/edit',
                navLocation: 'rental',
                validationErrors: validationErrors
            });
        });
}


exports.showRentalDetails = (req, res, next) => {
    const rentId = req.params.rentId;
    let allClients, allBoats;
    const validationErrors = [];

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
                rentData: rent,
                formMode: 'showDetails',
                allClients: allClients,
                allBoats: allBoats,
                pageTitle: 'Rental details',
                formAction: '',
                navLocation: 'rental',
                validationErrors: validationErrors
            });
        });
}


exports.addRental = (req, res, next) => {

    const rentData = { ...req.body };
    let allClients, allBoats;

    RentalRepository.createRental(rentData)
        .then(result => {
            res.redirect('/rentals');
        })
        .catch(err => {
            ClientRepository.getClients()
                .then(cnts => {
                    allClients = cnts;
                    return BoatRepository.getBoats();
                })
                .then(bts => {
                    allBoats = bts;
                    res.render('pages/rental/rental-form', {
                        rent: {},
                        rentData: rentData,
                        formMode: 'createNew',
                        allClients: allClients,
                        allBoats: allBoats,
                        pageTitle: 'New rental',
                        btnLabel: 'Add rental',
                        formAction: '/rentals/add',
                        navLocation: 'rental',
                        validationErrors: err.errors
                    });

                });

        });
};

exports.updateRental = (req, res, next) => {
    const rentId = req.body._id;
    const rentData = { ...req.body };
    let allClients, allBoats;

    RentalRepository.updateRental(rentId, rentData)
        .then(result => {
            res.redirect('/rentals');
        })
        .catch(err => {
            ClientRepository.getClients()
                .then(cnts => {
                    allClients = cnts;
                    return BoatRepository.getBoats();
                })
                .then(bts => {
                    allBoats = bts;
                    return RentalRepository.getRentalById(rentId);

                }).then(rent => {

                    res.render('pages/rental/rental-form', {
                        rent: rent,
                        rentData: rentData,
                        formMode: 'edit',
                        allClients: allClients,
                        allBoats: allBoats,
                        pageTitle: 'Edit rental',
                        btnLabel: 'Edit rental',
                        formAction: '/rentals/edit',
                        navLocation: 'rental',
                        validationErrors: err.errors
                    });
                });
        });
};

exports.deleteRental = (req, res, next) => {
    const rentId = req.params.rentId;
    RentalRepository.deleteRental(rentId)
        .then(() => {
            res.redirect('/rentals');
        });
};