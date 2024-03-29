const RentalRepository = require('../repository/sequelize/RentalRepository');

exports.getRentals = (req, res, next) => {
    RentalRepository.getRentals()
        .then(rentals => {
            res.status(200).json(rentals);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getRentalById = (req, res, next) => {
    const rentalID = req.params.rentalID;
    RentalRepository.getRentalById(rentalID)
        .then(rental => {
            if (!rental) {
                res.status(404).json({
                    message: 'Rental with id: ' + rentalID + ' not found'
                })
            } else {
                res.status(200).json(rental);
            }
        });
};

exports.createRental = (req, res, next) => {
    RentalRepository.createRental(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.updateRental = (req, res, next) => {
    const rentalID = req.params.rentalID;
    RentalRepository.updateRental(rentalID, req.body)
        .then(result => {
            res.status(200).json({ message: 'Rental updated!', rental: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteRental = (req, res, next) => {
    const rentalID = req.params.rentalID;
    RentalRepository.deleteRental(rentalID)
        .then(result => {
            res.status(200).json({ message: 'Removed rental', rental: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};