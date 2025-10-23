 function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');
// Output:
// Outer Variable: outside
// Inner Variable: inside 
// In this example, innerFunction is a closure that captures the variable outerVariable from its outer scope (outerFunction).
// When we call newFunction, it still has access to outerVariable, demonstrating how closures work in JavaScript.
// Closures allow functions to retain access to their lexical scope even when the function is executed outside that scope.
// This is useful for creating private variables and functions, as well as for maintaining state in asynchronous programming.
// Closures are a fundamental concept in JavaScript and are widely used in various programming patterns.
// Understanding closures is essential for mastering JavaScript and writing efficient, maintainable code.   // Note: The difference in output (starting from 1 instead of 0) is due to the placement of the increment operation before the return statement in this version.
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}           
const counter = makeCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
// In this example, the inner function returned by makeCounter has access to the count variable defined in the outer function's scope, demonstrating a closure.
// Each time we call counter(), it increments and returns the count variable, maintaining its state between calls.
// This is a common use case for closures, allowing us to create functions with private state that cannot be accessed directly from outside the function.
// Closures are often used for data privacy, as they allow you to create private variables that cannot be accessed from outside the enclosing function.
// They are also useful for creating function factories and maintaining state in asynchronous programming.
// Closures are a fundamental concept in JavaScript and are widely used in various programming patterns.
// Closures are created whenever a function is created, allowing the function to remember the scope in which it was created.
// This enables powerful programming techniques such as data encapsulation and function currying.
// Closures allow functions to have "private" variables that are not accessible from outside the function.
// They enable the creation of function factories, where functions can generate other functions with specific behaviors.
// Closures are essential for maintaining state in asynchronous programming, such as in callbacks and event handlers.
// Understanding closures is crucial for mastering JavaScript and writing efficient, maintainable code.// Note: The difference in output (starting from 1 instead of 0) is due to the placement of the increment operation before the return statement in this version.
// Note: The difference in output (starting from 1 instead of 0) is due to the placement of the increment operation before the return statement in this version.    

