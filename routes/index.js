var express = require('express');
var router = express.Router();
var renderRH = require('./renderthisRH');
var renderLH = require('./renderthisLH');








/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Render farm manager v.001' });
});



console.log(filename);
console.log(samples);


renderRH(filename,samples);
renderLH(filename,samples);






module.exports = router;

