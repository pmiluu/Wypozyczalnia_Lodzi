const express = require('express');
const router = express.Router();

const boatController = require('../controllers/boatController');

router.get('/', boatController.showBoatList);
router.get('/add', boatController.showAddBoatForm);
router.get('/edit/:btId', boatController.showEditBoatForm);
router.get('/details/:btId', boatController.showBoatDetails);

router.post('/add', boatController.addBoat);
router.post('/edit', boatController.updateBoat);
router.get('/delete/:btId', boatController.deleteBoat);

module.exports = router;