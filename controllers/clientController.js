exports.showClientList = (req, res, next) => {
    res.render('pages/client/client-list', {});
}

exports.showAddClientForm = (req, res, next) => {
    res.render('pages/client/client-form', {});
}

exports.showClientDetails = (req, res, next) => {
    res.render('pages/client/client-details', {});
}

