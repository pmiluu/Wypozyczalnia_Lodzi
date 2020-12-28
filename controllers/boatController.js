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
    res.render('pages/boat/boat-form', {
        bt: {},
        pageTitle: 'New boat',
        formMode: 'createNew',
        btnLabel: 'Add boat',
        formAction: '/boats/add',
        navLocation: 'boat'
    });
}

exports.showEditBoatForm = (req, res, next) => {
    const btId = req.params.btId;
    BoatRepository.getBoatById(btId)
        .then(bt => {
            res.render('pages/boat/boat-form', {
                bt: bt,
                formMode: 'edit',
                pageTitle: 'Edit boat',
                btnLabel: 'Edit boat',
                formAction: '/boats/edit',
                navLocation: 'boat'
            });
        });
};

exports.showBoatDetails = (req, res, next) => {
    const btId = req.params.btId;
    BoatRepository.getBoatById(btId)
        .then(bt => {
            res.render('pages/boat/boat-form', {
                bt: bt,
                formMode: 'showDetails',
                pageTitle: 'Boat details',
                formAction: '',
                navLocation: 'boat'
            });
        });
}
