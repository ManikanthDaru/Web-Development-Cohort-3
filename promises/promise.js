function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function callback() {
	console.log("3 seconds have passed");
}

let p=setTimeoutPromisified(3000); // object of the promise class
console.log(p);
p.then(callback);
setTimeoutPromisified(10000).then(callback); // promise based approach





// function random(resolve) { // resolve is also a function

// }
// let a = new Promise(random); // supposed to return you something eventually
// // using the eventual value returned by a promise
// console.log(a);
// function callback2() {
//     console.log("promise is succeeded");
// }
// a.then(callback2);