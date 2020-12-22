exports.showClientList = (req, res, next) => {
    res.render('pages/client/client-list', { navLocation: 'client' });
}

exports.showAddClientForm = (req, res, next) => {
    res.render('pages/client/client-form', { navLocation: 'client' });
}

exports.showClientDetails = (req, res, next) => {
    res.render('pages/client/client-details', { navLocation: 'client' });
}

