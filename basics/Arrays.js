let arr = [1, 2, 3, 4, 5];

// -----------------------------
// 📌 Access & Size
// -----------------------------
console.log("Access element:", arr[0]); // 1
console.log("Length:", arr.length); // 5

// -----------------------------
// 📌 Adding / Removing
// -----------------------------
arr.push(6);
console.log("push:", arr); // [1,2,3,4,5,6]

arr.pop();
console.log("pop:", arr); // [1,2,3,4,5]

arr.shift();
console.log("shift:", arr); // [2,3,4,5]

arr.unshift(1);
console.log("unshift:", arr); // [1,2,3,4,5]

arr.splice(2, 1); // remove element at index 2
console.log("splice (remove index 2):", arr); // [1,2,4,5]

// -----------------------------
// 📌 Searching
// -----------------------------
console.log("indexOf 4:", arr.indexOf(4)); // 2
console.log("includes 3:", arr.includes(3)); // false (we removed it)
console.log("find > 2:", arr.find(num => num > 2)); // 4
console.log("findIndex > 2:", arr.findIndex(num => num > 2)); // 2

// -----------------------------
// 📌 Iteration & Transformation
// -----------------------------
arr.forEach(num => console.log("forEach:", num * 2)); // 2,4,8,10
let mapped = arr.map(num => num * 3);
console.log("map:", mapped); // [3,6,12,15]
let filtered = arr.filter(num => num % 2 === 0);
console.log("filter (evens):", filtered); // [2,4]
let reduced = arr.reduce((acc, num) => acc + num, 0);
console.log("reduce (sum):", reduced); // 12

// -----------------------------
// 📌 Sorting & Reversing
// -----------------------------
let sortedAsc = [...arr].sort((a, b) => a - b);
console.log("sort ascending:", sortedAsc); // [1,2,4,5]
let sortedDesc = [...arr].sort((a, b) => b - a);
console.log("sort descending:", sortedDesc); // [5,4,2,1]
let reversed = [...arr].reverse();
console.log("reverse:", reversed); // [5,4,2,1]

// -----------------------------
// 📌 Copy & Combine
// -----------------------------
let copyArr = [...arr];
console.log("spread copy:", copyArr); // [1,2,4,5]
let concatenated = arr.concat([6, 7, 8]);
console.log("concat:", concatenated); // [1,2,4,5,6,7,8]
let sliced = arr.slice(1, 3);
console.log("slice:", sliced); // [2,4]

// -----------------------------
// ⚡ Useful but Less Frequent
// -----------------------------
console.log("join:", arr.join("-")); // "1-2-4-5"
console.log("every > 0:", arr.every(num => num > 0)); // true
console.log("some > 4:", arr.some(num => num > 4)); // true
console.log("Array.from:", Array.from("hello")); // ['h','e','l','l','o']
console.log("fill:", new Array(5).fill(0)); // [0,0,0,0,0]
let nested = [[1, 2], [3, 4], [5, 6]];
console.log("flat:", nested.flat()); // [1,2,3,4,5,6]
console.log("unique:", [...new Set([1, 2, 2, 3, 4, 4, 5])]); // [1,2,3,4,5]

// -----------------------------
// 🛑 Rarely Used in Daily Projects
// -----------------------------
console.log("multi-dimensional access:", nested[1][0]); // 3
let arr2 = [10, 20, 30];
arr2.splice(1, 0, 15, 17); // insert at index 1
console.log("advanced splice (insert):", arr2); // [10,15,17,20,30]
