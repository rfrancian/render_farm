var renderRH = require('./renderthisRH');
var renderLH = require('./renderthisLH');

// these are test values atm
const userRH = 'rsf@192.168.86.36'
const userLH = 'rsf@192.168.86.20'
const filename = '/Volumes/blenderFiles/flowers2.79.blend'
const samples = 4;

console.log(userRH);
console.log(userLH);

console.log(filename);
console.log(samples);

// render left and right sides of image
renderRH(filename, samples, userRH);
renderLH(filename, samples, userLH);

