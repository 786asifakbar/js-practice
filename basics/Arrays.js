let arr = [1, 2, 3, 4, 5];

// 1. forEach → Looping through elements
arr.forEach(num => console.log("forEach:", num));

// 2. map → Transform each element (returns a new array)
let doubled = arr.map(num => num * 2);
console.log("map:", doubled); // [2, 4, 6, 8, 10]

// 3. filter → Get only elements matching condition
let evens = arr.filter(num => num % 2 === 0);
console.log("filter:", evens); // [2, 4]

// 4. reduce → Combine into a single value (sum, etc.)
let sum = arr.reduce((acc, num) => acc + num, 0);
console.log("reduce:", sum); // 15

// 5. find → Find first element that matches condition
let firstGreaterThan3 = arr.find(num => num > 3);
console.log("find:", firstGreaterThan3); // 4

// 6. findIndex → Find index of first match
let index = arr.findIndex(num => num > 3);
console.log("findIndex:", index); // 3

// 7. includes → Check if value exists
console.log("includes 3:", arr.includes(3)); // true

// 8. slice → Copy or cut part of array
let sliced = arr.slice(1, 3);
console.log("slice:", sliced); // [2, 3]

// 9. splice → Add/Remove elements at specific index
let arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 1); // remove element at index 2
console.log("splice (remove index 2):", arr2); // [1, 2, 4, 5]

// 10. sort → Sort array
let sorted = [...arr].sort((a, b) => b - a);
console.log("sort (descending):", sorted); // [5, 4, 3, 2, 1]
