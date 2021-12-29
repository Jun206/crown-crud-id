var express = require('express');
var router = express.Router();
// s
/* GET home page. */
router.get('/overview_93', function(req, res, next){
  res.render('midterm_93/overview_93', {
    title: 'Express',
    name: 'JunKai Huang',
    id: `209410793`,
  });
});

module.exports = router;
