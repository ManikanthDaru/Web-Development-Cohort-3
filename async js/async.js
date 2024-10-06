const fs = require("fs");

function print(err, contents) { // error first callback function
    console.log("Error is ");
    console.log(err);
    console.log("Content is ");
    console.log(contents);
}

fs.readFile("abc.txt", "utf-8", print); // asynchronously

fs.readFile("b.txt", "utf-8", print);  // asynchronously

console.log("Done!");
// setTimeout
// setTimeout is another asynchronous function that executes a certain code after some time
function run() {
	console.log("I will run after 1s");
}

setTimeout(run, 1000);
console.log("I will run immedietely");