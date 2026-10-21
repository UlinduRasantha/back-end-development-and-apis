const fs = require('node:fs');
const exists = fs.existsSync("assets/output.txt");
console.log(exists); // true or false

