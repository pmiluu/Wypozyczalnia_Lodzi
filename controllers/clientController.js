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
    res.render('pages/client/client-form', {
        cnt: {},
        pageTitle: 'New client',
        formMode: 'createNew',
        btnLabel: 'Add client',
        formAction: '/clients/add',
        navLocation: 'client'
    });
}

exports.showEditClientForm = (req, res, next) => {
    const cntId = req.params.cntId;
    ClientRepository.getClientById(cntId)
        .then(cnt => {
            res.render('pages/client/client-form', {
                cnt: cnt,
                formMode: 'edit',
                pageTitle: 'Edit client',
                btnLabel: 'Edit client',
                formAction: '/clients/edit',
                navLocation: 'client'
            });
        });
}

exports.showClientDetails = (req, res, next) => {
    const cntId = req.params.cntId;
    ClientRepository.getClientById(cntId)
        .then(cnt => {
            res.render('pages/client/client-form', {
                cnt: cnt,
                formMode: 'showDetails',
                pageTitle: 'Client details',
                formAction: '',
                navLocation: 'client'
            });
        });
}

exports.addClient = (req, res, next) => {
    const cntData = { ...req.body };
    ClientRepository.createClient(cntData)
        .then(result => {
            res.redirect('/clients');
        });
};

exports.updateClient = (req, res, next) => {
    const cntId = req.body._id;
    const cntData = { ...req.body };
    ClientRepository.updateClient(cntId, cntData)
        .then(result => {
            res.redirect('/clients');
        });
};

exports.deleteClient = (req, res, next) => {
    const cntId = req.params.cntId;
    ClientRepository.deleteClient(cntId)
        .then(() => {
            res.redirect('/clients');
        });
};