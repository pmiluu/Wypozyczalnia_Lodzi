const BoatRepository = require('../repository/sequelize/BoatRepository');

exports.showBoatList = (req, res, next) => {
    BoatRepository.getBoats()
        .then(boats => {
            res.render('pages/boat/boat-list', {
                boats: boats,
                navLocation: 'boat'
            });
        });
}

exports.showAddBoatForm = (req, res, next) => {
    res.render('pages/boat/boat-form', { navLocation: 'boat' });
}

exports.showBoatDetails = (req, res, next) => {
    res.render('pages/boat/boat-details', { navLocation: 'boat' });
}
