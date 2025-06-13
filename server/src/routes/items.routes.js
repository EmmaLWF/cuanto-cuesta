const router = require('express').Router();
const itemsController = require('../controllers/items.js');
const supermercadosController = require('../controllers/supermercados');

router.get('/items', itemsController.getItems);

router.post('/items', itemsController.postItems);

router.get('/supermercados', supermercadosController.getSupermercados);

router.post('/supermercados', supermercadosController.postSupermercados);

router.post('/itemTags', itemsController.itemTags);



module.exports = router;