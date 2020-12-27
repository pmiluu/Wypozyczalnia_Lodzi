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
    res.render('pages/client/client-form', { navLocation: 'client' });
}

exports.showClientDetails = (req, res, next) => {
    res.render('pages/client/client-details', { navLocation: 'client' });
}

