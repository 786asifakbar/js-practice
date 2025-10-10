 
  let arr = [1, 2, 3];
    let doubled = arr.map(x => x * 2);
    console.log(doubled); // [2, 4, 6]
    console.log(arr); // [1, 2, 3]

    let sum = arr.reduce((accumulator, current) => accumulator + current, 0);
    console.log(sum); // 6

    let product = arr.reduce((accumulator, current) => accumulator * current, 1);
    console.log(product); // 6

    let max = arr.reduce((accumulator, current) => Math.max(accumulator, current), -Infinity);
    console.log(max); // 3

    let min = arr.reduce((accumulator, current) => Math.min(accumulator, current), Infinity);
    console.log(min); // 1

    let concatenated = arr.reduce((accumulator, current) => accumulator + current.toString(), '');
    console.log(concatenated); // "123"

// Reduce example
    let words = ['Hello', 'World', 'from', 'Reduce'];
    let sentence = words.reduce((accumulator, current) => accumulator + ' ' + current);
    console.log(sentence); // "Hello World from Reduce"

    let lengths = words.map(word => word.length);
    let totalLength = lengths.reduce((accumulator, current) => accumulator + current, 0);
    console.log(totalLength); // 19
    
    let flattened = [[1, 2], [3, 4], [5]].reduce((accumulator, current) => accumulator.concat(current), []);
    console.log(flattened); // [1, 2, 3, 4, 5]
    console.log(obj_Map.get(objKey1)); // 'Object 1' objMap.set(objKey2, 'Object 2');

 console.log(objMap.get(objKey1)); // 'Object 1'
 console.log(objMap.get(objKey2)); // 'Object 2'
 
 objMap.delete(objKey1);
 console.log(objMap.has(objKey1)); // false
 console.log(objMap.size); // 1

 objMap.clear();
 console.log(objMap.size); // 0
    console.log(objMap.get(objKey2)); // 'Object 2'
    objMap.set(objKey2, 'Object 2');
    console.log(objMap.get(objKey1)); // 'Object 1'
    console.log(objMap.get(objKey2)); // 'Object 2'
    
    objMap.delete(objKey1);
    console.log(objMap.has(objKey1)); // false
    console.log(objMap.size); // 1
    
    objMap.clear();
    console.log(objMap.size); // 0

// Map iteration
    let objMap = new Map();
    objMap.set('key1', 'value1');
    objMap.set('key2', 'value2');
    objMap.set('key3', 'value3');
    for (let [key, value] of objMap) {
        console.log(`${key}: ${value}`);
    }
    // key1: value1
    // key2: value2
    // key3: value3

    objMap.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
    // key1: value1
    // key2: value2
    // key3: value3

// Map with object keys
    let objKey1 = { id: 1 };
    let objKey2 = { id: 2 };

    let objMap = new Map();
    objMap.set(objKey1, 'Object 1');
    objMap.set(objKey2, 'Object 2');
    
    console.log(objMap.get(objKey1)); // 'Object 1'
    console.log(objMap.get(objKey2)); // 'Object 2'
    
    console.log(objMap.size); // 2
    
    objMap.delete(objKey1);
    console.log(objMap.has(objKey1)); // false
    console.log(objMap.size); // 1
    
    objMap.clear();
    console.log(objMap.size); // 0

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
    
    console.log(obj['key1']); // 'value1'
    console.log(map.get('key1')); // 'value1'
    
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
    console.log(map);
    // Map(2) { 'key2' => 'value2', 'key3' => 'value3' }    
    // { key2: 'value2', key3: 'value3' }
    console.log(map);
    // Map(2) { 'key2' => 'value2', 'key3' => 'value3' }
    // { key2: 'value2', key3: 'value3' }   
    console.log(obj['key1']); // undefined
    console.log(map.get('key1')); // undefined
    console.log(map);
    // Map(2) { 'key2' => 'value2', 'key3' => 'value3' }
    console.log(obj);
    // { key2: 'value2', key3: 'value3' }
// undefined
// undefined
// Map(2) { 'key2' => 'value2', 'key3' => 'value3' }
// { key2: 'value2', key3: 'value3' }       
    console.log(obj);
    // { key2: 'value2', key3: 'value3' }    
    console.log(map);
    // Map(2) { 'key2' => 'value2', 'key3' => 'value3' }    
// { key2: 'value2', key3: 'value3' }    
// Map(2) { 'key2' => 'value2', 'key3' => 'value3' }
    console.log(obj['key1']);   
    // undefined 
    console.log(map.get('key1')); 
    // undefined
// undefined
// undefined        