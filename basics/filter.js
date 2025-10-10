 let nums = [1 , 2 , 3 , 4 , 5 , 6 , 7 ];
   let newNums = nums.filter((num) => num > 4);
    console.log(newNums);

// expected output [5, 6, 7]
// filter method creates a new array with all elements that pass the test implemented by the provided function.
// here we are filtering numbers greater than 4 from the nums array.
  //other way to describe filter
  let newNums2 = [];
  for(let i = 0; i < nums.length; i++){
    if(nums[i] > 4){
      newNums2.push(nums[i]);
    }
  }
  console.log(newNums2);
  // expected output [5, 6, 7]

  //filter method does not change the original array
  console.log(nums);
  // expected output [1, 2, 3, 4, 5, 6, 7]
  // original array remains unchanged
  //filter method returns a new array
  console.log(newNums === nums);
  // expected output false
  // new array is not the same as the original array
  //filter method can be used with other data types
  let words = ['apple', 'banana', 'grape', 'kiwi', 'mango'];
  let newWords = words.filter((word) => word.length > 4);
  console.log(newWords);
  // expected output ['apple', 'banana', 'grape', 'mango']
  // filtering words with length greater than 4

  //filter method can be used with objects
  let people = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 30},
    {name: 'Jim', age: 35},
    {name: 'Jill', age: 40}
  ];
  let newPeople = people.filter((person) => person.age > 30);
  console.log(newPeople);
  // expected output [{name: 'Jim', age: 35}, {name: 'Jill', age: 40}]
  // filtering people with age greater than 30

  //filter method can be used with complex conditions
  let newPeople2 = people.filter((person) => person.age > 25 && person.name.startsWith('J'));
  console.log(newPeople2);
  // expected output [{name: 'Jane', age: 30}, {name: 'Jim', age: 35}, {name: 'Jill', age: 40}]
  // filtering people with age greater than 25 and name starting with 'J'

  //filter method can be chained with other array methods
  let newPeople3 = people.filter((person) => person.age > 25).map((person) => person.name);
  console.log(newPeople3);
  // expected output ['Jane', 'Jim', 'Jill']
  // filtering people with age greater than 25 and then mapping to get their names

  //filter method can be used with arrow functions
  let newPeople4 = people.filter(person => person.age > 30);
  console.log(newPeople4);
  // expected output [{name: 'Jim', age: 35}, {name: 'Jill', age: 40}]
  // filtering people with age greater than 30 using arrow function shorthand

  //filter method can be used with traditional functions
  let newPeople5 = people.filter(function(person){
    return person.age > 30;
  });
  console.log(newPeople5);
  // expected output [{name: 'Jim', age: 35}, {name: 'Jill', age: 40}]
  // filtering people with age greater than 30 using traditional function syntax

  //filter method can be used with index and array parameters
  let newPeople6 = people.filter((person, index, array) => {
    console.log(index); // logging index
    console.log(array); // logging original array
    return person.age > 30;
  });
  console.log(newPeople6);
  // expected output [{name: 'Jim', age: 35}, {name: 'Jill', age: 40}]
  // filtering people with age greater than 30 while logging index and original array

  //filter method can be used with thisArg parameter  
  let context = {minAge: 30};
  let newPeople7 = people.filter(function(person){
    return person.age > this.minAge;
  }, context);
  console.log(newPeople7);
  // expected output [{name: 'Jim', age: 35}, {name: 'Jill', age: 40}]
  // filtering people with age greater than minAge from context object

  //filter method can be used with empty arrays
  let emptyArray = [];
  let newEmptyArray = emptyArray.filter((item) => item > 0);
  console.log(newEmptyArray);
  // expected output []
  // filtering from an empty array returns an empty array     
  //filter method can be used with arrays containing undefined or null values
  let arrayWithUndefined = [1, 2, undefined, 4, null, 6];
  let newArrayWithUndefined = arrayWithUndefined.filter((item) => item !== undefined && item !== null);
  console.log(newArrayWithUndefined);
  // expected output [1, 2, 4, 6]
  // filtering out undefined and null values from the array   
  //filter method can be used with arrays containing duplicate values
  let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
  let newArrayWithDuplicates = arrayWithDuplicates.filter((item, index, array) => array.indexOf(item) === index);
  console.log(newArrayWithDuplicates);
  // expected output [1, 2, 3, 4, 5]
  // filtering out duplicate values from the array  
  //filter method can be used with arrays containing mixed data types
  let mixedArray = [1, '2', 3, '4', 5, '6'];
  let newMixedArray = mixedArray.filter((item) => typeof item === 'number');
  console.log(newMixedArray);
  // expected output [1, 3, 5]
  // filtering out non-number values from the array   
  //filter method can be used with large arrays
  let largeArray = Array.from({length: 1000}, (_, i) => i + 1);
  let newLargeArray = largeArray.filter((item) => item > 500);
  console.log(newLargeArray);
  // expected output [501, 502, ..., 1000]
  // filtering numbers greater than 500 from a large array of numbers from 1 to 1000  
  //filter method can be used with arrays of objects containing nested objects
  let nestedObjectsArray = [
    {name: 'John', address: {city: 'New York', state: 'NY'}},
    {name: 'Jane', address: {city: 'Los Angeles', state: 'CA'}},
    {name: 'Jim', address: {city: 'Chicago', state: 'IL'}},         
    {name: 'Jill', address: {city: 'Houston', state: 'TX'}}
  ];
  let newNestedObjectsArray = nestedObjectsArray.filter((person) => person.address.state === 'CA');
  console.log(newNestedObjectsArray);
  // expected output [{name: 'Jane', address: {city: 'Los Angeles', state: 'CA'}}]
  // filtering people living in California from an array of objects containing nested address objects   
  //filter method can be used with arrays of objects containing arrays
  let arrayWithArrays = [
    {name: 'John', hobbies: ['reading', 'traveling']},
    {name: 'Jane', hobbies: ['cooking', 'swimming']},
    {name: 'Jim', hobbies: ['gaming', 'hiking']},   
    {name: 'Jill', hobbies: ['dancing', 'painting']}
  ];
  let newArrayWithArrays = arrayWithArrays.filter((person) => person.hobbies.includes('hiking'));
  console.log(newArrayWithArrays);
  // expected output [{name: 'Jim', hobbies: ['gaming', 'hiking']}]
  // filtering people who have 'hiking' as a hobby from an array of objects containing hobbies arrays   
  //filter method can be used with arrays of objects containing various data types
  let diverseObjectsArray = [
    {id: 1, value: 'apple', isActive: true},
    {id: 2, value: 'banana', isActive: false},
    {id: 3, value: 'grape', isActive: true},
    {id: 4, value: 'kiwi', isActive: false}
  ];
  let newDiverseObjectsArray = diverseObjectsArray.filter((item) => item.isActive);
  console.log(newDiverseObjectsArray);
  // expected output [{id: 1, value: 'apple', isActive: true}, {id: 3, value: 'grape', isActive: true}]
  // filtering active items from an array of objects containing various data types
  //filter method can be used with arrays of objects containing date objects
  let dateObjectsArray = [
    {event: 'Meeting', date: new Date('2023-01-01')},
    {event: 'Conference', date: new Date('2023-06-15')},
    {event: 'Workshop', date: new Date('2023-03-20')},
    {event: 'Webinar', date: new Date('2023-09-10')}
  ];    
  let newDateObjectsArray = dateObjectsArray.filter((item) => item.date > new Date('2023-05-01'));
  console.log(newDateObjectsArray);
  // expected output [{event: 'Conference', date: new Date('2023-06-15')}, {event: 'Webinar', date: new Date('2023-09-10')}]
  // filtering events happening after May 1, 2023 from an array of objects containing date objects
  //filter method can be used with arrays of objects containing boolean values
  let booleanObjectsArray = [
    {task: 'Task 1', completed: true},
    {task: 'Task 2', completed: false},
    {task: 'Task 3', completed: true},
    {task: 'Task 4', completed: false}
  ];
  let newBooleanObjectsArray = booleanObjectsArray.filter((item) => item.completed);
  console.log(newBooleanObjectsArray);
  // expected output [{task: 'Task 1', completed: true}, {task: 'Task 3', completed: true}]
  // filtering completed tasks from an array of objects containing boolean values
  //filter method can be used with arrays of objects containing numeric values
  let numericObjectsArray = [
    {product: 'Product 1', price: 100},
    {product: 'Product 2', price: 200},
    {product: 'Product 3', price: 150},
    {product: 'Product 4', price: 300}
  ];
  let newNumericObjectsArray = numericObjectsArray.filter((item) => item.price > 150);
  console.log(newNumericObjectsArray);
  // expected output [{product: 'Product 2', price: 200}, {product: 'Product 4', price: 300}]
  // filtering products with price greater than 150 from an array of objects containing numeric values
  //filter method can be used with arrays of objects containing string values
  let stringObjectsArray = [
    {city: 'New York', country: 'USA'},
    {city: 'Los Angeles', country: 'USA'},
    {city: 'Toronto', country: 'Canada'},
    {city: 'Vancouver', country: 'Canada'}
  ];
  let newStringObjectsArray = stringObjectsArray.filter((item) => item.country === 'Canada');
  console.log(newStringObjectsArray);
  // expected output [{city: 'Toronto', country: 'Canada'}, {city: 'Vancouver', country: 'Canada'}]
  // filtering cities in Canada from an array of objects containing string values   
  //filter method can be used with arrays of objects containing null values
  let nullObjectsArray = [
    {id: 1, name: 'Item 1'},
    {id: 2, name: null},
    {id: 3, name: 'Item 3'},
    {id: 4, name: null}
  ];
  let newNullObjectsArray = nullObjectsArray.filter((item) => item.name !== null);
  console.log(newNullObjectsArray);
  // expected output [{id: 1, name: 'Item 1'}, {id: 3, name: 'Item 3'}]
  // filtering out items with null names from an array of objects containing null value
  //filter method can be used with arrays of objects containing undefined values
  let undefinedObjectsArray = [
    {id: 1, name: 'Item 1'},
    {id: 2, name: undefined},
    {id: 3, name: 'Item 3'},
    {id: 4, name: undefined}
  ];
  let newUndefinedObjectsArray = undefinedObjectsArray.filter((item) => item.name !== undefined);
  console.log(newUndefinedObjectsArray);
  // expected output [{id: 1, name: 'Item 1'}, {id: 3, name: 'Item 3'}]
  // filtering out items with undefined names from an array of objects containing undefined value 
  //filter method can be used with arrays of objects containing special characters in string values
  