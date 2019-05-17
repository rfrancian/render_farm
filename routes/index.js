var express = require('express');
// import imageRender module
const imageRender = require('../imageRender')
var router = express.Router();

// temp set render inputs that will eventually come from a web form
const filename = '/Volumes/blenderFiles/statueDecimatedUV3packed.blend'
const samples = 4;
const split = 0.4;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Render, the farm manager v.001' });
});

router.post('/', function(req, res, next) {
  // render image
  console.log(body.filename)
  console.log(body.jobid)
  console.log(body.samples)
  console.log(body.split)

  // imageRender(filename, samples, split);
});



module.exports = router;

