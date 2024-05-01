// =================
// Stripped down cowsayer CLI, 
// no libraries or arguments
// https://nodejs.dev/learn/accept-input-from-the-command-line-in-nodejs
// =================

const readline = require('readline');

// Make supplies for our speech bubble
let topLine = '______________________';
let bottomLine = '----------------------';

// Make a cow that takes a string
const cow = (saying) => {
    // Ensure the saying isn't longer than 20 characters
    if (saying.length > 20) {
        saying = saying.substring(0, 17) + '...';
    }

    // Construct the speech bubble
    let speechBubble = '\n< ' + saying + ' >';

    // Construct the cow
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

    // Log the cow to the console
    console.log(cow);
}

// Use readline to get a string from the terminal 
// (with a prompt so it's clearer what we want)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What should the cow say? ', (saying) => {
    cow(saying);
    rl.close();
});
