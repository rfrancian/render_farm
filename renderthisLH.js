
// this file is a test render child process spawn.
// it takes the workerNode ID in the form <workerNode>@<ip_address>, the blender filename, the number of samples desired, 
// and the script name and starts my laptop doing the LH (lefthand side of the image)
// and my ubuntu machine doing the RH
// both outputs are to stdout at the moment
// next steps:
// send the script and filenames from the webform and call this function
// then open a textarea/window on the web page and send the output there.





const {spawn} = require('child_process');

function renderthisLH(ScriptName, Filename, Samples, WorkerNodeLH) {
  
const scriptName = ScriptName;
const workerNodeLH = WorkerNodeLH;    
const filename = Filename;
const samples = Samples;


const childProcessRH = spawn(scriptName, [filename, samples, workerNodeLH]);

    childProcessRH.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });


    childProcessRH.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    });
  

    childProcessRH.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });




  
  console.log('### DONE');
}


module.exports= renderthisLH;


