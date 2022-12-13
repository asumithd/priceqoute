const { Router } = require('express');
const router = Router();

const pricectrl = require('../controllers/price.controller')

router.get('/', pricectrl.getPrices);
router.get('/:id', pricectrl.getPrice);
router.put('/:id', pricectrl.editPrice);
router.delete('/:id', pricectrl.deletePrice);
router.post('/', pricectrl.createPrice);
router.post('/test', pricectrl.bulkprice);

module.exports = router;