const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productscontroller');

router.get('/', productsController.findAll);

module.exports = router;