
// this file is a test render child process spawn.
// it takes the user ID, the blender filename, and the script name and starts my laptop doing the LH
// and my ubuntu machine doing the RH
// both outputs are to stdout at the moment
// next steps:
// send the script and filenames from the webform and call this function
// then open a textarea/window on the web page and send the output there.





const {spawn} = require('child_process');

function renderthisRH( Filename, Samples, UserRH) {

const userRH = UserRH;    
const filename = Filename;
const samples = Samples;


const childProcessRH = spawn('/Volumes/blenderFiles/blenderScript_RH', [filename, samples, userRH]);

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


module.exports= renderthisRH;




