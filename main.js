var renderNode2 = require('./renderthisNode2');
var renderNode1 = require('./renderthisNode1');

// these are test values atm
// worker nodes
const workerNode2 = 'rsf@192.168.86.36'
const workerNode1 = 'rsf@192.168.86.20'

// image strips
// for the pi branch we use the NAS scripts
const scriptnameNode1 = '/Volumes/blenderFiles/blenderScript_Node1'
const scriptnameNode2 = '/Volumes/blenderFiles/blenderScript_Node2'
// const scriptnameNode1 = '/home/rsf/render_farm/blenderScript2.8_Node1'
// const scriptnameNode2 = '/home/rsf/render_farm/blenderScript2.8_Node2'

// using local script here because I'm testing this code on one of the machines that's
// doing the rendering so I have to use sshpass to logon to itself.
// the normal render_farm server will use the uncommented script above
// const scriptnameNode2 = './blenderScript_Node2'


// blender file name and requested samples
// const filename = '/Volumes/blenderFiles/flowers2.79.blend'
const filename = '/Volumes/blenderFiles/statueDecimatedUV3packed.blend'


const samples = 4;

const split = 0.3;

const minX_Node1 = 0.0;
const maxX_Node1 = split;

const minX_Node2 = split;
const maxX_Node2 = 1.0;



// 
console.log(workerNode2);
console.log(workerNode1);

console.log(filename);
console.log(samples);

// render left and right sides of image
renderNode2(scriptnameNode2, filename, samples, workerNode2, minX_Node2, maxX_Node2);
renderNode1(scriptnameNode1, filename, samples, workerNode1, minX_Node1, maxX_Node1);

