//Inovoke Immediately Function Expression
(function(){
    console.log("IIFE");
})();   

//IIFE with parameters
(function(name){
    console.log("IIFE with parameter " + name);
})("Hitesh");

//IIFE with return value
let returnvalue = (function(){
    return 23;
})();
console.log(returnvalue);           

//IIFE with parameter and return value
let returnvalue2 = (function(name){
    return "IIFE with parameter and return value " + name;
})("Hitesh");
console.log(returnvalue2);
//let returnvalue2 = (function(name){
  //  return "IIFE with parameter and return value " + name;
//})("Hitesh");
//console.log(returnvalue2);           
  
  