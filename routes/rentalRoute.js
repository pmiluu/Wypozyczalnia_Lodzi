const express = require('express');
const router = express.Router();

const rentalControler = require('../controllers/rentalController');

router.get('/', rentalControler.showRentalList);
router.get('/add', rentalControler.showAddRentalForm);
router.get('/details/:empId', rentalControler.showRentalDetails);

module.exports = router;