 
 let Myobj={
   name :"Alice",
   age:30,
   city:"New York",
    };  

let object=Object.values(Myobj);
let array=[10,20,30,40,50];

for(const key in Myobj){     
    console.log(key);
}
for(const index in array){
    console.log(index);
}
for(let index in "Hello"){
    console.log(index);
};      

// for...in loop is used to iterate over the enumerable properties of an object, including inherited properties. It returns the keys (property names) of the object.
// for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc. It returns the values of the iterable object.

