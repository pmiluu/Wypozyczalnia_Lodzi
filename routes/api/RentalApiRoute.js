const express = require('express');
const router = express.Router();

const rentalApiController = require('../../api/RentalAPI');

router.get('/', rentalApiController.getRentals);
router.get('/:rentalID', rentalApiController.getRentalById);
router.post('/', rentalApiController.createRental);
router.put('/:rentalID', rentalApiController.updateRental);
router.delete('/:rentalID', rentalApiController.deleteRental);

module.exports = router;