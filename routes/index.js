var express = require('express');
const main = require('../main')
var router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Render, the farm manager v.001' });
});

console.log(main.filename.form-control.filename)




module.exports = router;

