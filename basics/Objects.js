// =====================================
// 🧠 OBJECT OPERATIONS
// =====================================

let person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log("Original object:", person);
// {name: "John", age: 30, city: "New York"}

// -----------------------------
// 📌 Accessing Properties
// -----------------------------
console.log("Access name:", person.name);      // John
console.log("Access age:", person["age"]);     // 30

// -----------------------------
// 📌 Adding / Updating Properties
// -----------------------------
person.job = "Developer";  // add new property
person.age = 31;           // update existing property
console.log("After adding/updating:", person);
// {name: "John", age: 31, city: "New York", job: "Developer"}

// -----------------------------
// 📌 Deleting Properties
// -----------------------------
delete person.city;
console.log("After deleting city:", person);
// {name: "John", age: 31, job: "Developer"}

// -----------------------------
// 📌 Iterating Over Properties
// -----------------------------
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// name: John
// age: 31
// job: Developer

// -----------------------------
// 📌 Object Methods
// -----------------------------
console.log("Keys:", Object.keys(person));
// ["name", "age", "job"]
console.log("Values:", Object.values(person));
// ["John", 31, "Developer"]
console.log("Entries:", Object.entries(person));
// [["name","John"],["age",31],["job","Developer"]]

// -----------------------------
// 📌 Merging Objects
// -----------------------------
let additionalInfo = { country: "USA", hobby: "Photography" };
let mergedPerson = { ...person, ...additionalInfo };
console.log("Merged object:", mergedPerson);
// {name:"John", age:31, job:"Developer", country:"USA", hobby:"Photography"}

// -----------------------------
// 📌 Cloning Objects
// -----------------------------
let clonedPerson = { ...person };
console.log("Cloned object:", clonedPerson);
// {name:"John", age:31, job:"Developer"}

// -----------------------------
// 📌 Checking Property Existence
// -----------------------------
console.log("Has age?", "age" in person);                 // true
console.log("Has city?", person.hasOwnProperty("city"));  // false

// -----------------------------
// 📌 Freezing Object (Make Immutable)
// -----------------------------
Object.freeze(person);
person.age = 32; // ❌ will not change
console.log("After freeze attempt:", person.age); // 31

// -----------------------------
// 📌 Converting Object to JSON String
// -----------------------------
let jsonString = JSON.stringify(person);
console.log("JSON string:", jsonString);
// '{"name":"John","age":31,"job":"Developer"}'

// -----------------------------
// 📌 Parsing JSON Back to Object
// -----------------------------
let parsedObject = JSON.parse(jsonString);
console.log("Parsed object:", parsedObject);
// {name:"John", age:31, job:"Developer"}

// -----------------------------
// ⚡ Useful Type Checking
// -----------------------------
let isPerson = typeof person === "object" && person !== null;
console.log("Is person an object?", isPerson); // true
