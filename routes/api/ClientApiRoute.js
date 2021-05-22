const express = require('express');
const router = express.Router();

const clientApiController = require('../../api/ClientAPI');

router.get('/', clientApiController.getClients);
router.get('/:clientID', clientApiController.getClientById);
router.post('/', clientApiController.createClient);
router.put('/:clientID', clientApiController.updateClient);
router.delete('/:clientID', clientApiController.deleteClient);

module.exports = router;