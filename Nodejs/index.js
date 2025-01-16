// Packages - 2 types - Internal packages,External packages
// Internal packages - 3
// 1. fs - Filesystem
// 2. path - Path related functions
// 3. http - Create HTTP Servers

const fs = require('fs');
const path = require('path');

console.log(path.join(__dirname, "text.txt"));

const filePath = path.join(__dirname, "text.txt");

console.log(__dirname); // It is a global variable that contains the directory name of the current module.

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        console.log(typeof err);
    }
    else {
        console.log(data);
        console.log(typeof data);
    }
});