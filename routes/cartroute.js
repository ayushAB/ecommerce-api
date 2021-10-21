const express = require('express')
const router = express.Router()
const cartController = require('../controllers/cartcontroller');

router.get('/', cartController.findAllproducts);
router.get('/:id', cartController.findAll);
router.post('/saveproducts', cartController.create);
module.exports = router;