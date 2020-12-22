exports.showBoatList = (req, res, next) => {
    res.render('pages/boat/boat-list', { navLocation: 'boat' });
}

exports.showAddBoatForm = (req, res, next) => {
    res.render('pages/boat/boat-form', { navLocation: 'boat' });
}

exports.showBoatDetails = (req, res, next) => {
    res.render('pages/boat/boat-details', { navLocation: 'boat' });
}