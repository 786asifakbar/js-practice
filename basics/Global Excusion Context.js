// thoery 
// 1. Global Execution Context (GEC) is the default or base execution context where the JavaScript code starts executing.
// 2. It is created when the JavaScript engine starts executing the code.
// 3. The GEC consists of two main phases: Creation Phase and Execution Phase.
// 4. During the Creation Phase, the JavaScript engine allocates memory for variables and functions, and sets up the scope chain.
// 5. In the Execution Phase, the code is executed line by line, and variables are assigned values.     

// code example
console.log("Hello, World!"); // This line is executed in the Global Execution Context

var x = 10; // Variable 'x' is created in the Global Execution Context
function greet() { // Function 'greet' is created in the Global Execution Context
    console.log("Greetings!");
}
    
greet(); // Calling the function 'greet' in the Global Execution Context    
console.log(x); // Accessing the variable 'x' in the Global Execution Context
// In this example, the entire code runs in the Global Execution Context. The variable 'x' and the function 'greet' are created during the Creation Phase, and then they are executed in the Execution Phase.
// Note: In a browser environment, the Global Execution Context is associated with the 'window' object, while in Node.js, it is associated with the 'global' object.
// The GEC is the outermost context and is always present, even when other execution contexts (like function execution contexts) are created.
// Understanding the Global Execution Context is crucial for grasping how JavaScript handles variable scope, hoisting, and function execution.
// It is important to note that the Global Execution Context is created only once during the lifetime of a JavaScript program.
// The GEC is destroyed when the program finishes executing, and all its variables and functions are no longer accessible.
// The GEC is the outermost context and is always present, even when other execution contexts (like function execution contexts) are created.


// Understanding the Global Execution Context is crucial for grasping how JavaScript handles variable scope, hoisting, and function execution.
// It is important to note that the Global Execution Context is created only once during the lifetime of a JavaScript program.
// The GEC is destroyed when the program finishes executing, and all its variables and functions are no longer accessible.
// The GEC is the outermost context and is always present, even when other execution contexts (like function execution contexts) are created.
// Understanding the Global Execution Context is crucial for grasping how JavaScript handles variable scope, hoisting, and function execution.
// It is important to note that the Global Execution Context is created only once during the lifetime of a JavaScript program.
// The GEC is destroyed when the program finishes executing, and all its variables and functions are no longer accessible.
// The GEC is the outermost context and is always present, even when other execution contexts (like function execution contexts) are created.
// Understanding the Global Execution Context is crucial for grasping how JavaScript handles variable scope, hoisting, and function execution.
// It is important to note that the Global Execution Context is created only once during the lifetime of a JavaScript program.
// The GEC is destroyed when the program finishes executing, and all its variables and functions are no longer accessible.
// The GEC is the outermost context and is always present, even when other execution contexts (like function execution contexts) are created.
// Understanding the Global Execution Context is crucial for grasping how JavaScript handles variable scope, hoisting, and function execution.
// It is important to note that the Global Execution Context is created only once during the lifetime of a JavaScript program.
// The GEC is destroyed when the program finishes executing, and all its variables and functions are no longer accessible.
// The GEC is the outermost context and is always present, even when other execution contexts (like function execution contexts) are created.
// Understanding the Global Execution Context is crucial for grasping how JavaScript handles variable scope, hoisting, and function execution.
// It is important to note that the Global Execution Context is created only once during the lifetime of a JavaScript program.
// The GEC is destroyed when the program finishes executing, and all its variables and functions are no longer accessible.