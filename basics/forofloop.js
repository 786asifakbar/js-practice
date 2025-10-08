let Myobj = {
    name: "Alice",
    age: 30,
    city: "New York"
};

let object = Object.values(Myobj);
let array = [10, 20, 30, 40, 50];

for (const element of object) {     
    console.log(element);
}
for (const element of array) {
    console.log(element);
}
for (let char of "Hello") {
    console.log(char);
};