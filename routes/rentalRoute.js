const express = require('express');
const router = express.Router();

const rentalControler = require('../controllers/rentalController');

router.get('/', rentalControler.showRentalList);
router.get('/add', rentalControler.showAddRentalForm);
router.get('/edit/:rentId', rentalControler.showEditRentalForm);
router.get('/details/:rentId', rentalControler.showRentalDetails);

router.post('/add', rentalControler.addRental);
router.post('/edit', rentalControler.updateRental);
router.get('/delete/:rentId', rentalControler.deleteRental);

module.exports = router;