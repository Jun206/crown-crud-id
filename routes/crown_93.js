var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('crown_93/crown_93', {
    title: 'Express',
    name: 'JunKai Huang',
    id: `209410793`,
  });
});

module.exports = router;
