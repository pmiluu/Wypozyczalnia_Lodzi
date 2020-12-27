const express = require('express');
const router = express.Router();

const boatApiController = require('../../api/BoatAPI');

router.get('/', boatApiController.getBoats);
router.get('/:boatID', boatApiController.getBoatById);
router.post('/', boatApiController.createBoat);
router.put('/:boatID', boatApiController.updateBoat);
router.delete('/:boatID', boatApiController.deleteBoat);

module.exports = router;