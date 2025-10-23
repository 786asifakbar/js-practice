 // create Promise
new Promise(function(resolve,reject){
setTimeout(function(){
let error = false;
if(!error){
resolve({
  name : "Asif",
  city : "Karachi",
  arr : ["apple","mangoes","banana", 'obj { course : "Js",TeacherName : "Hitesh"}']
})
}else{
    reject("error");
}

},1000);
})

// first way consume Promise 
// .then(function(user){
//     return user.arr[3];
// }).then(function(city){
//     console.log(city);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=> console.log("program Excuted"));
// try : try and catch async await 

// 2nd way to writing consume Promise 
async function promiseFunctionHandle(){
    try {
           const response = await fetch("https://github.com/user");
           console.log(response);
    } catch(error){
      console.log(error);
    }
}

      promiseFunctionHandle();