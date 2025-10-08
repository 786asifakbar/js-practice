    let condition = true;
    if (condition) {
    console.log("Condition is true");
  } else {
    console.log("Condition is false");
  } 
   // if else statement
   
   let day = 3;
    switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");

        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day");
   }
    // switch statement 
    // turnary operator
    let age = 20;
    let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
    console.log(canVote);
    // loops
    for (let i = 0; i < 5; i++) {
        console.log("Iteration: " + i);
    }
    // for loop
    let count = 0;
    while (count < 5) {
        console.log("Count: " + count);
        count++;
    }
    // while loop
    let num = 0;
    do {
        console.log("Number: " + num);
        num++;
    } while (num < 5);
    // do while loop
    let items = ['apple', 'banana', 'cherry'];
    for (let item of items) {
        console.log("Item: " + item);
    }
    // for of loop
    let person = {name: "Alice", age: 25, city: "New York"};
    for (let key in person) {
        console.log(key + ": " + person[key]);
    }
    // for in loop
    // break and continue
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            break; // exit loop when i is 5
        }
        console.log("i: " + i);
    }

    for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            continue; // skip even numbers
        }
        console.log("Odd i: " + i);
    }
    // break and continue statements        



//nullish coalescing operator
let userInput = null;
let defaultValue = "Default Value";
let result = userInput ?? defaultValue;
console.log(result); // Output: Default Value

// Optional chaining
let user = {
    name: "John",
    address: {
        city: "New York"
    }
};
console.log(user?.address?.city); // Output: New York
console.log(user?.contact?.phone); // Output: undefined 
console.log(user?.contact?.phone ?? "No phone number available"); // Output: No phone number available
// Output: Condition is true
// Output: Wednesday
// Output: Yes, you can vote.
// Output: Iteration: 0
// Output: Iteration: 1
// Output: Iteration: 2
// Output: Iteration: 3
// Output: Iteration: 4
// Output: Count: 0
// Output: Count: 1
// Output: Count: 2
// Output: Count: 3
// Output: Count: 4
// Output: Number: 0
// Output: Number: 1
// Output: Number: 2
// Output: Number: 3
// Output: Number: 4
// Output: Item: apple
// Output: Item: banana
// Output: Item: cherry
// Output: name: Alice
// Output: age: 25
// Output: city: New York
// Output: i: 0
// Output: i: 1
//  Output: i: 2
// Output: i: 3
// Output: i: 4
// Output: Odd i: 1
// Output: Odd i: 3
// Output: Odd i: 5
// Output: Odd i: 7
// Output: Odd i: 9 

  