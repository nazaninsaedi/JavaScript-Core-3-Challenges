// =================
// Stripped down cowsayer CLI, 
// no libraries or arguments
// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
// =================
const readline = require('readline');

//make supplies 
const readline = require('readline');
// 1. Make  a command line interface.

// 2. Make supplies for our speech bubble
let topLine = '______________________';
let bottomLine = '______________________';
// 3. Make a cow that takes a string
const cow = (saying) => {
    if (saying.length >20) {
        saying = saying.substring(0, 17) + '...';
    
    }
    // how did you make the cow before?
    

}


// 4. Use readline to get a string from the terminal 
// (with a prompt so it's clearer what we want)