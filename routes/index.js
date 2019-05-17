var express = require('express');
// import imageRender module
const imageRender = require('../imageRender')
var router = express.Router();

// temp set render inputs that will eventually come from a web form
const filename = '/Volumes/blenderFiles/'
const samples = 2;
const split = 0.5;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Render, the farm manager v.001' });
});

router.post('/', function(req, res, next) {
  // insert comment here 
  imageRender(req.body.filename, req.body.samples, req.body.split);
});



module.exports = router;

