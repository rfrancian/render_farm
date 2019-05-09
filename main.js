var renderRH = require('./renderthisRH');
var renderLH = require('./renderthisLH');

// these are test values atm
// worker nodes
const workerNodeRH = 'rsf@192.168.86.36'
const workerNodeLH = 'rsf@192.168.86.20'

// image strips
const scriptnameLH = '/Volumes/blenderFiles/blenderScript_LH'
// const scriptnameRH = '/Volumes/blenderFiles/blenderScript_RH'

// using local script here, in the master branch, because I'm testing this code on one of the machines that's
// doing the rendering so I have to use sshpass to logon to itself.
// the normal render_farm server will use the uncommented script above
const scriptnameRH = './blenderScript_RH'


// blender file name and requested samples
const filename = '/Volumes/blenderFiles/flowers2.79.blend'
const samples = 4;

// 
console.log(workerNodeRH);
console.log(workerNodeLH);

console.log(filename);
console.log(samples);

// render left and right sides of image
renderRH(scriptnameRH, filename, samples, workerNodeRH);
renderLH(scriptnameLH, filename, samples, workerNodeLH);

