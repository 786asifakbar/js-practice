
function outerFunction() {
    let outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVariable);
    }

    innerFunction();
}   
outerFunction();
// Output: I am from the outer function
// In this example, the innerFunction has access to the outerVariable defined in the outerFunction's scope, demonstrating a closure.    
// Closures are often used for data privacy, as they allow you to create private variables that cannot be accessed from outside the enclosing function.
// They are also useful for creating function factories and maintaining state in asynchronous programming.
// Closures are a fundamental concept in JavaScript and are widely used in various programming patterns.
// Closures are created whenever a function is created, allowing the function to remember the scope in which it was created.
// This enables powerful programming techniques such as data encapsulation and function currying.
// Closures allow functions to have "private" variables that are not accessible from outside the function.
// They enable the creation of function factories, where functions can generate other functions with specific behaviors.
// Closures are essential for maintaining state in asynchronous programming, such as in callbacks and event handlers.
// Understanding closures is crucial for mastering JavaScript and writing efficient, maintainable code.
