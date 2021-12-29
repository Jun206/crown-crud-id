var express = require('express');
var router = express.Router();
const crown2Controller_93 = require('../controllers/crown_93/crown2Controller_93');

/* CREATE　*/
router.post('/create', crown2Controller_93.createProducts);


/* READ */
router.get('/', crown2Controller_93.getCategories);
router.get('/shop_93', crown2Controller_93.getShop);
router.get('/shop_93/:category', crown2Controller_93.getProductsByCategory);

/* UPDATE */
router.patch('/update', crown2Controller_93.updateProducts);


/* DELETE */
router.delete('/delete/:id', crown2Controller_93.deleteProduct);


module.exports = router;
