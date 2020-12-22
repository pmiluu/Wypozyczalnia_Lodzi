exports.showRentalList = (req, res, next) => {
    res.render('pages/rental/rental-list', { navLocation: 'rental' });
}
exports.showAddRentalForm = (req, res, next) => {
    res.render('pages/rental/rental-form', { navLocation: 'rental' });
}
exports.showRentalDetails = (req, res, next) => {
    res.render('pages/rental/rental-details', { navLocation: 'rental' });
}