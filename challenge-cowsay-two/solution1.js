// =================
// Stripped down cowsayer CLI, 
// no libraries
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
// =================

// 1. Accept arguments

// how will you accept arguments?

// 2. Make supplies for our speech bubble

let topLine = '_';
let bottomLine = '-';
let saying = '';

// 3. Make a cow that takes a string

function cowsay(saying) {
    if (saying.length > 20) {
        saying = saying.substring(0, 17) + '...';

    }
    //construct the cow
    let cow = `
    ${topLine}
   /                    \\
  /   ${speechBubble}   \\
 /______________________\\
(                       )
(       ${saying}        )
(                       )
  \\______________________/
         \\  /(__)
          (oo)\\_______
          (__)        )\\/\\
             ||----w |
             ||     ||
`;

//log the cow to the console
console.log(cow);
}

//check if an argument is provided
if (Process.argv.length < 3) {
    console.log("Please provide an argument for the cow to say.");
} else {"
// Get the argument from the command line
    let saying = process.argv[2];
    cowsay(saying);
    
}



// how will you make the speech bubble contain the text?

// where will the cow picture go?

// how will you account for the parameter being empty?

}

//4. Pipe argument into cowsay function and return a cow

// how will you log this to the console?
