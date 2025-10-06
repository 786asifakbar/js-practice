// =====================================
// 🧠 OBJECT OPERATIONS (Clean Version)
// =====================================

let user = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    isActive: true,
    roles: ["admin", "editor"],
    profile: {
        age: 28,
        country: "USA"
    }
};

console.log("Initial user object:", user);

// Check if property exists
console.log("Has salary?", user.hasOwnProperty("salary")); // false

// Accessing properties
console.log("User name:", user.name);               // Alice
console.log("User age:", user.profile.age);         // 28
console.log("First role:", user.roles[0]);          // admin

// Adding a new property
user.lastLogin = "2024-06-01";
console.log("After adding lastLogin:", user);

// Updating an existing property
user.isActive = false;
console.log("After updating isActive:", user);

// Deleting a property
delete user.email;
console.log("After deleting email:", user);

// Iterating over properties
for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}

// Object methods
console.log("Keys:", Object.keys(user));
console.log("Values:", Object.values(user));
console.log("Entries:", Object.entries(user));

// Merging objects
let additionalData = { phone: "123-456-7890", address: "123 Main St" };
let updatedUser = { ...user, ...additionalData };
console.log("Merged user object:", updatedUser);

// Cloning the object
let clonedUser = { ...user };
console.log("Cloned user object:", clonedUser);

// Checking property existence
console.log("Has name?", "name" in user);                 // true
console.log("Has email?", user.hasOwnProperty("email"));  // false
