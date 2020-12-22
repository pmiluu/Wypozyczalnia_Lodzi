const express = require('express');
const router = express.Router();

const boatController = require('../controllers/boatController');

router.get('/', boatController.showBoatList);
router.get('/add', boatController.showAddBoatForm);
router.get('/details/:boatId', boatController.showBoatDetails);

module.exports = router;