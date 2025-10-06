// Function Declaration
function add(a, b) {
  return a + b;
}

// Function Expression
const multiply = function(a, b) {
  return a * b;
};

// Arrow Function
const subtract = (a, b) => a - b;

// IIFE
(() => console.log("This function runs immediately!"))();

// Function with Default Parameter
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

// Function with Rest Parameters
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Callback Example
function fetchData(callback) {
  setTimeout(() => {
    callback({ name: "John", age: 30 });
  }, 1000);
}

// Recursive Function
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

// Closure Example
function outerFunction(outerVariable) {
  return function(innerVariable) {
    console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
  };
}

// Function with Object Parameter
function displayUser(user) {
  return `Name: ${user.name}, Age: ${user.age}`;
}

// Function with Array Parameter
function getFirstElement(arr) {
  return arr[0];
}

// Function with Multiple Return Values
function calculate(a, b) {
  return { sum: a + b, product: a * b };
}

// Function with Template Literals
function createMessage(name, age) {
  return `My name is ${name} and I am ${age} years old.`;
}

// Function with Type Checking
function addNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number')
    throw new Error("Both arguments must be numbers.");
  return a + b;
}

// Nested Function
function outer() {
  function inner() {
    return "Hello from the inner function!";
  }
  return inner();
}

// Error Handling Example
function divide(a, b) {
  if (b === 0) throw new Error("Division by zero not allowed.");
  return a / b;
}

// Async/Await + Promises
function fetchDataPromise() {
  return new Promise(resolve =>
    setTimeout(() => resolve({ name: "Eve", age: 22 }), 1000)
  );
}
async function fetchDataAsync() {
  try {
    const data = await fetchDataPromise();
    console.log("Fetched Data:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}

// Function with Object Argument
function withObject(obj) {
  return obj;
}

// String Function
function shout(message) {
  return message.toUpperCase() + "!!!";
}

// ========== Function Testing (Single, Clean Logs) ==========

console.log(add(2, 3), multiply(2, 3), subtract(5, 3));
console.log(greet(), greet("Alice"));
console.log(sum(10, 20, 30, 40));
fetchData(data => console.log("Callback Data:", data));
console.log(factorial(5));
outerFunction("Outside")("Inside");
console.log(displayUser({ name: "Bob", age: 25 }));
console.log(getFirstElement([10, 20, 30]));
console.log(calculate(5, 10));
console.log(createMessage("Diana", 32));
console.log(addNumbers(5, 10));
console.log(outer());
try { console.log(divide(10, 0)); } catch (e) { console.error(e.message); }
fetchDataAsync();
console.log(withObject({ name: "Asif Ali", age: 31, job: "Developer" }));
console.log(shout("javascript is fun"));
