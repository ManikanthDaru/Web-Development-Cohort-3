// Approach #1
// Calling the respective function
function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}


console.log(sum(1, 2));
console.log(divide(1000, 2));

// Approach #2
// Passing in what needs to be done as an argument.
// Functional arguments->passing a function to another function as an argument
function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function doOperation(a, b, op) {
  return op(a, b)
}

console.log(doOperation(1, 2, multiply));
console.log(doOperation(1000, 999, subtract));