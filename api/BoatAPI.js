const BoatRepository = require('../repository/sequelize/BoatRepository');

exports.getBoats = (req, res, next) => {
    BoatRepository.getBoats()
        .then(boats => {
            res.status(200).json(boats);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getBoatById = (req, res, next) => {
    const boatID = req.params.boatID;
    BoatRepository.getBoatById(boatID)
        .then(boat => {
            if (!boat) {
                res.status(404).json({
                    message: 'Boat with id: ' + boatID + ' not found'
                })
            } else {
                res.status(200).json(boat);
            }
        });
};

exports.createBoat = (req, res, next) => {
    BoatRepository.createBoat(req.body)
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

exports.updateBoat = (req, res, next) => {
    const boatID = req.params.boatID;
    BoatRepository.updateBoat(boatID, req.body)
        .then(result => {
            res.status(200).json({ message: 'Boat updated!', boat: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteBoat = (req, res, next) => {
    const boatID = req.params.boatID;
    BoatRepository.deleteBoat(boatID)
        .then(result => {
            res.status(200).json({ message: 'Removed boat', boat: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};