var express = require('express');
var router = express.Router();
const apiCrown2Controller_93 = require('../controllers/apiCrown2Controller_93');

/* crown_93 */
router.get('/category_93', apiCrown2Controller_93.getCategories);
router.get('/shop_93', apiCrown2Controller_93.getShop);
router.get('/shop_93/:category', apiCrown2Controller_93.getProductsByCategory);


/* midproj_93 */

/* finalproj_93 */

module.exports = router;
