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
  // render image
  console.log(req.body.filename)
  console.log(req.body.jobid)
  console.log(req.body.samples)
  console.log(req.body.split)
  var textNode1 = req.body.Node1
  textNode1.values += req.body.filename + '\n';

  imageRender(req.body.filename, req.body.samples, req.body.split);
});



module.exports = router;

