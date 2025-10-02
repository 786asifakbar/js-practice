/* 

✅ Daily Projects ke liye Important Functions
parseInt, parseFloat
toFixed, toString
round, ceil, floor
max, min, random (with range)
sqrt, pow, abs, trunc, sign 
*/


let num = 50;

console.log(Number.isInteger(num));   // true → check integer
console.log(Number.isNaN("abc"));     // true → check NaN
console.log(Number.isSafeInteger(10));// true → safe integer

console.log(Number.parseInt("42px")); // 42 → string → integer
console.log(Number.parseFloat("3.14"));// 3.14 → string → float

console.log(num.toString());          // "50" → number to string
console.log(num.toFixed(2));          // "50.00" → decimal places


// Rounding
console.log(Math.round(5.6));   // 6 → nearest integer
console.log(Math.ceil(5.1));    // 6 → always up
console.log(Math.floor(5.9));   // 5 → always down

// Min & Max
console.log(Math.max(1, 4, 7)); // 7 → largest
console.log(Math.min(1, 4, 7)); // 1 → smallest

// Random numbers
console.log(Math.random());             // 0 to 1
console.log(Math.random() * 100);       // 0 to 100
console.log(Math.random() * (50 - 10) + 10); // 10 to 50

// Math operations
console.log(Math.sqrt(100));  // 10 → square root
console.log(Math.pow(2, 3));  // 8  → 2^3
console.log(Math.abs(-10));   // 10 → absolute value

// Decimal handling
console.log(Math.trunc(4.7)); // 4 → remove decimal
console.log(Math.sign(-5));   // -1 → sign (-1, 0, 1)

// may be come into interview

console.log(Math.log(10));     // Natural log
console.log(Math.log10(100));  // Base-10 log → 2
console.log(Math.log2(8));     // Base-2 log → 3
console.log(Math.sin(Math.PI / 2)); // 1 → sine

console.log(typeof num); // check type of number
