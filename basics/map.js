let arr = [1, 2, 3];
let newArr = arr.map((num) => num * 2);
console.log(newArr); // [2, 4, 6]
console.log(arr); // [1, 2, 3]

// Map example  

 let myMap = new Map();
 myMap.set('a', 1);
 myMap.set('b', 2);
 myMap.set('c', 3);

 console.log(myMap); // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
 console.log(myMap.get('a')); // 1
 console.log(myMap.has('b')); // true
 console.log(myMap.size); // 3

 myMap.delete('c');
 console.log(myMap); // Map(2) { 'a' => 1, 'b' => 2 }

 myMap.clear();
 console.log(myMap); // Map(0) {}
 
// Map iteration
 let anotherMap = new Map();
 anotherMap.set('x', 10);
 anotherMap.set('y', 20);
 anotherMap.set('z', 30);

 for (let [key, value] of anotherMap) {
     console.log(`${key}: ${value}`);
 }
// x: 10
// y: 20
// z: 30

anotherMap.forEach((value, key) => {
    console.log(`${key} => ${value}`);
});
// x => 10
// y => 20
// z => 30

let keys = Array.from(anotherMap.keys());
let values = Array.from(anotherMap.values());
console.log(keys);

console.log(values); // ['x', 'y', 'z']
 // [10, 20, 30]
// ['x', 'y', 'z']
// [10, 20, 30]

// Map with objects as keys
 let objKey1 = { id: 1 };
 let objKey2 = { id: 2 };

 let obj_Map = new Map();
 objMap.set(objKey1, 'Object 1');
 objMap.set(objKey2, 'Object 2');
 
 console.log(obj_Map.get(objKey1)); // Object 1
 console.log(obj_Map.get(objKey2)); // Object 2

 console.log(obj_Map.size); // 2

 objMap.delete(objKey1);
 console.log(obj_Map.has(objKey1));
    // false
    console.log(obj_Map.size); // 1
    objMap.clear();
    console.log(obj_Map.size); // 0
// false
// 1
// 0
     
// Map vs Object
 let obj = {};
 obj['key1'] = 'value1';
 obj['key2'] = 'value2';
 
 console.log(obj);
    // { key1: 'value1', key2: 'value2' }

    let map = new Map();
    map.set('key1', 'value1');
    map.set('key2', 'value2');
    
    console.log(map);
    // Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

    console.log(obj['key1']); // value1
    console.log(map.get('key1')); // value1
    
    console.log(Object.keys(obj));
    console.log(Array.from(map.keys()));
    // [ 'key1', 'key2' ]
    // [ 'key1', 'key2' ]
    
    console.log(Object.values(obj));
    console.log(Array.from(map.values()));
    // [ 'value1', 'value2' ]
    // [ 'value1', 'value2' ]
    
    delete obj['key1'];
    map.delete('key1');
    
    console.log(obj);
    console.log(map);
    // { key2: 'value2' }
    // Map(1) { 'key2' => 'value2' }
    
    obj['key3'] = 'value3';
    map.set('key3', 'value3');
    
    console.log(obj);
    console.log(map);
    // { key2: 'value2', key3: 'value3' }
    // Map(2) { 'key2' => 'value2', 'key3' => 'value3' }
    
// {    key2: 'value2', key3: 'value3' }    
// Map(2) { 'key2' => 'value2', 'key3' => 'value3' }
// value1
// value1
// [ 'key1', 'key2' ]
// [ 'key1', 'key2' ]
// [ 'value1', 'value2' ]
// [ 'value1', 'value2' ]
// { key2: 'value2' }
// Map(1) { 'key2' => 'value2' }
// { key2: 'value2', key3: 'value3' }
// Map(2) { 'key2' => 'value2', 'key3' => 'value3' }                    

// Summary
// Maps are collections of key-value pairs where keys can be of any type.
// They maintain the order of insertion and provide methods for easy manipulation and iteration.
// Maps are often preferred over plain objects when keys are not strings or when order matters.
// Maps are collections of key-value pairs where keys can be of any type.
// They maintain the order of insertion and provide methods for easy manipulation and iteration.
// Maps are often preferred over plain objects when keys are not strings or when order matters.

// chaning 
let chainMap = new Map();
chainMap.set('a', 1)
        .set('b', 2)
        .set('c', 3);

console.log(chainMap); // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
// Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }

// Initializing a Map with an array of key-value pairs
let initMap = new Map([
    ['x', 10],
    ['y', 20],
    ['z', 30]
]);

console.log(initMap); // Map(3) { 'x' => 10, 'y' => 20, 'z' => 30 }
// Map(3) { 'x' => 10, 'y' => 20, 'z' => 30 }

// Using objects as keys in a Map
let obj1 = { name: 'Alice' };
let obj2 = { name: 'Bob' };

let objMap = new Map();
objMap.set(obj1, 'Engineer');
objMap.set(obj2, 'Designer');

console.log(objMap.get(obj1)); // Engineer
console.log(objMap.get(obj2)); // Designer
// Engineer
// Designer
// Checking existence of keys
console.log(objMap.has(obj1)); // true
console.log(objMap.has({ name: 'Alice' })); // false (different reference)
// true
// false (different reference)
console.log(objMap.size); // 2 // 2

// Deleting a key-value pair                

// Iterating over keys and values
for (let key of objMap.keys()) {
    console.log(key);
}

for (let value of objMap.values()) {
    console.log(value);
}               
// { name: 'Alice' }
// { name: 'Bob' }
// Engineer
// Designer 
// { name: 'Alice' }
// { name: 'Bob' }
// Engineer
// Designer
// Map with objects as keys 