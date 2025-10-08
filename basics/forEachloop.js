 
 let array = [10, 20, 30, 40, 50];

 array.forEach(function(element, index, arr) {
     console.log(element);
     console.log(index);
     console.log(arr);
 });

 // The forEach loop is a method available on arrays in JavaScript. It executes a provided function once for each array element. It does not return a value and cannot be broken out of like a traditional for loop.
    // It is commonly used for iterating over arrays to perform operations on each element.
    // It provides access to the current element, its index, and the entire array within the callback function.

// Comparison between for...in loop and for...of loop:
// for...in loop iterates over the keys (property names) of an object, while for...of loop iterates over the values of an iterable object like an array or string.
// for...in loop is generally used for objects, while for...of loop is used for arrays and other iterable objects.
// for...in loop returns the keys of the object, while for...of loop returns the values of the iterable object.
// forEach loop is specifically for arrays and executes a provided function for each element in the array, providing access to the element, its index, and the entire array.
// forEach loop is not a replacement for for...in or for...of loops, but rather a different way to iterate over arrays with a focus on functional programming.