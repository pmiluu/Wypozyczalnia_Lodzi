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
    const validationErrors = [];
    res.render('pages/boat/boat-form', {
        bt: {},
        pageTitle: 'New boat',
        formMode: 'createNew',
        btnLabel: 'Add boat',
        formAction: '/boats/add',
        navLocation: 'boat',
        validationErrors: validationErrors
    });
}

exports.showEditBoatForm = (req, res, next) => {
    const btId = req.params.btId;
    const validationErrors = [];
    BoatRepository.getBoatById(btId)
        .then(bt => {
            res.render('pages/boat/boat-form', {
                bt: bt,
                bRentals: bt.rentals,
                formMode: 'edit',
                pageTitle: 'Edit boat',
                btnLabel: 'Edit boat',
                formAction: '/boats/edit',
                navLocation: 'boat',
                validationErrors: validationErrors
            });
        });
};

exports.showBoatDetails = (req, res, next) => {
    const btId = req.params.btId;
    const validationErrors = [];
    BoatRepository.getBoatById(btId)
        .then(bt => {
            res.render('pages/boat/boat-form', {
                bt: bt,
                bRentals: bt.rentals,
                formMode: 'showDetails',
                pageTitle: 'Boat details',
                formAction: '',
                navLocation: 'boat',
                validationErrors: validationErrors
            });
        });
}

exports.addBoat = (req, res, next) => {
    const btData = { ...req.body };
    BoatRepository.createBoat(btData)
        .then(result => {
            res.redirect('/boats');
        })
        .catch(err => {
            res.render('pages/boat/boat-form', {
                bt: btData,
                pageTitle: 'New boat',
                formMode: 'createNew',
                btnLabel: 'Add boat',
                formAction: '/boats/add',
                navLocation: 'boat',
                validationErrors: err.errors
            });
        });
};

exports.updateBoat = (req, res, next) => {
    const btId = req.body._id;
    const btData = { ...req.body };
    BoatRepository.updateBoat(btId, btData)
        .then(result => {
            res.redirect('/boats');
        })
        .catch(err => {
            BoatRepository.getBoatById(btId)
                .then(bt => {
                    res.render('pages/boat/boat-form', {
                        bt: btData,
                        bRentals: bt.rentals,
                        pageTitle: 'Edit boat',
                        formMode: 'edit',
                        btnLabel: 'Edit boat',
                        formAction: '/boats/edit',
                        navLocation: 'boat',
                        validationErrors: err.errors
                    });
                });
        });;
};

exports.deleteBoat = (req, res, next) => {
    const btId = req.params.btId;
    BoatRepository.deleteBoat(btId)
        .then(() => {
            res.redirect('/boats');
        });
};