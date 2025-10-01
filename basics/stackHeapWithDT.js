//primitive data types are stored in stack memory (hold single value) 
//reference / non-primitive data types are stored in heap memory (hold multiple values)

//primitive data types
let num1 = 5;
let num2 = num1;
num2 = 10;

console.log(num1); // 5
console.log(num2); // 10

//reference / non-primitive data types
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]

//demonstrating with object
let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";

console.log(obj1.name); // Bob
console.log(obj2.name); // Bob

//demonstrating with string (primitive)
let str1 = "Hello";
let str2 = str1;
str2 = "World";

console.log(str1); // Hello
console.log(str2); // World

//demonstrating with number (primitive)
let n1 = 42;
let n2 = n1;
n2 = 100;

console.log(n1); // 42
console.log(n2); // 100 