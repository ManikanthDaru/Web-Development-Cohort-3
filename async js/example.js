console.log("Hi");

function run() {
	console.log("I will run after 1s");
}

setTimeout(run, 1000);
console.log("My name is Manikanth Daru");

let a = 0;
// atleast takes 3-4 s
for (let i = 0; i < 100000000000; i++) {
    a++;
}

console.log("This is a CPU intensive task!");

// Options
// 1.  Hi
//     My name is Manikanth Daru
//     This is a CPU intensive task!
//     I will run after 1s

//2.   Hi
//     My name is Manikanth Daru
//     I will run after 1s
//     This is a CPU intensive task!

// Here Option 1 is correct