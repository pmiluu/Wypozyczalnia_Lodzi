const ClientRepository = require('../repository/sequelize/ClientRepository');

exports.showClientList = (req, res, next) => {
    ClientRepository.getClients()
        .then(clients => {
            res.render('pages/client/client-list', {
                clients: clients,
                navLocation: 'client'
            });
        });
}

exports.showAddClientForm = (req, res, next) => {
    const validationErrors = [];
    res.render('pages/client/client-form', {
        cnt: {},
        pageTitle: 'New client',
        formMode: 'createNew',
        btnLabel: 'Add client',
        formAction: '/clients/add',
        navLocation: 'client',
        validationErrors: validationErrors

    });
}

exports.showEditClientForm = (req, res, next) => {
    const cntId = req.params.cntId;
    const validationErrors = [];
    ClientRepository.getClientById(cntId)
        .then(cnt => {
            res.render('pages/client/client-form', {
                cnt: cnt,
                formMode: 'edit',
                pageTitle: 'Edit client',
                btnLabel: 'Edit client',
                formAction: '/clients/edit',
                navLocation: 'client',
                validationErrors: validationErrors
            });
        });
}

exports.showClientDetails = (req, res, next) => {
    const cntId = req.params.cntId;
    const validationErrors = [];
    ClientRepository.getClientById(cntId)
        .then(cnt => {
            res.render('pages/client/client-form', {
                cnt: cnt,
                formMode: 'showDetails',
                pageTitle: 'Client details',
                formAction: '',
                navLocation: 'client',
                validationErrors: validationErrors
            });
        });
}

exports.addClient = (req, res, next) => {
    const cntData = { ...req.body };
    ClientRepository.createClient(cntData)
        .then(result => {
            res.redirect('/clients');
        })
        .catch(err => {
            err.errors.forEach(e => {
                if (e.path.includes('email') && e.type == 'unique violation') {
                    e.message = "Email address is not unique";
                }
            });
            res.render('pages/client/client-form', {
                cnt: cntData,
                pageTitle: 'New client',
                formMode: 'createNew',
                btnLabel: 'Add client',
                formAction: '/clients/add',
                navLocation: 'client',
                validationErrors: err.errors
            });
        });
};

exports.updateClient = (req, res, next) => {
    const cntId = req.body._id;
    const cntData = { ...req.body };
    ClientRepository.updateClient(cntId, cntData)
        .then(result => {
            res.redirect('/clients');
        })
        .catch(err => {
            err.errors.forEach(e => {
                if (e.path.includes('email') && e.type == 'unique violation') {
                    e.message = "Email address is not unique";
                }
            });
            res.render('pages/client/client-form', {
                cnt: cntData,
                formMode: 'edit',
                pageTitle: 'Edit client',
                btnLabel: 'Edit client',
                formAction: '/clients/edit',
                navLocation: 'client',
                validationErrors: err.errors
            });
        });
};

exports.deleteClient = (req, res, next) => {
    const cntId = req.params.cntId;
    ClientRepository.deleteClient(cntId)
        .then(() => {
            res.redirect('/clients');
        });
};

