var express = require('express');
const main = require('../main')
var router = express.Router();

const filename = '/Volumes/blenderFiles/statueDecimatedUV3packed.blend'
const samples = 4;
const split = 0.4;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Render, the farm manager v.001' });
});

main(filename, samples, split);


module.exports = router;

