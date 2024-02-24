//Functions: a function is a reusable block code that perform a specific task

function sum(a, b) {
  return a + b;
}

const res1 = sum(4, 5);
console.log(res1);
const res2 = sum(6, 7);
console.log(res2);

let a = 10;
a = 20;
console.log(a);

// Types of function in Javascript
// 1. Named function
// 2. Anonymous function
// 3. Fucntion Expression: assigning function to a variable
// 4. Arrow function
// 5. IIFE
// 6.Callback Function
// 7. Higher order function

//Named function:
function sum(a, b) {
  return a + b;
}
//2. it does not have name identifier
console.log(
  (function (a, b) {
    return a + b;
  })(4, 5)
);

//Arrow function: =>
function sum(a, b) {
  return a + b;
}

const sum1 = (a, b) => a * b;
console.log(sum1(10, 10));

//Callback function: When we passed a function as a parameter, to oversome with asynchronous process we use callback function.
//Asynchronous programming allows multiple tasks or operations to be initiated and executed concurrently, asynchronous operations do not block the execution of a code.
function subtract(a, b) {
  return a - b;
}

function display(x, y, operation) {
  return operation(x, y);
}

console.log(display(9, 2, (a, b) => a * b));
