const path = require('path');

let indexPath = path.join(__dirname + '/index.md'); // Gives name of index.md file

console.log(indexPath);
 console.log(__dirname); // Gives name of working directory
 console.log(__filename); // Gives name of working file