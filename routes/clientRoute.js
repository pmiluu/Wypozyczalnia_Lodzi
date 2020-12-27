const express = require('express');
const router = express.Router();

const clientController = require('../controllers/clientController');

router.get('/', clientController.showClientList);
router.get('/add', clientController.showAddClientForm);
router.get('/edit/:cntId', clientController.showEditClientForm);
router.get('/details/:cntId', clientController.showClientDetails);

module.exports = router;
