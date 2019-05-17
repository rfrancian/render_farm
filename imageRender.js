// called from index.js with filename, samples, and split point


async function imageRender(filename, samples, split) {

    var renderNode2 = require('./renderthisNode2');
    var renderNode1 = require('./renderthisNode1');
    
    // username and IP address of
    // worker nodes
    const workerNode2 = 'rsf@192.168.86.36'
    const workerNode1 = 'rsf@192.168.86.20'
    
    // Image strips rendered by child process spawn with individual names
    const scriptnameNode1 = '/Volumes/blenderFiles/blenderScript_Node1'
    const scriptnameNode2 = '/Volumes/blenderFiles/blenderScript_Node2'
    
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
    renderNode1(scriptnameNode1, filename, samples, workerNode1, minX_Node1, maxX_Node1);
    renderNode2(scriptnameNode2, filename, samples, workerNode2, minX_Node2, maxX_Node2);
    
}



module.exports = imageRender;