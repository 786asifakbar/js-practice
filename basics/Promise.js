 
// create Promise 
const promiseOne = new Promise(function(resolve,reject){
	
	setTimeout(function(){
		console.log("Async Task Completed");
		resolve() // it is a method
	},1000);
});

//consume Promise

promiseOne.then(function(){  // ye function automatic argument recieve karta hai or value return karta hai 
	
	console.log(" Promise Consume ");
});
///////////////////////////////////////////////////////////////////////////////////////


new Promise(function(resolve , reject){
setTimeout(function(){
console.log("Tast Completed");
resolve();
},1000);

}).then(function(){

	console.log("consume Part e");

});

// agr server se data aa to us data ko kaise recive/use karte hen


const promiseThree = new Promise(function(resolve,reject){ 
setTimeout(function(){
resolve({name : "chai", aur : "code"}) // is resolve method k ander koi bhi data aa sakta hai object array etc 

},1000)
}) 

// resolve k ander jo data aata hai use yahan get karny k liye hum function k andar koi variable de dengy jaise user hai phir use console karengy yahan kahen use karengy.
promiseThree.then(function(user){

console.log(user);
});


////////////////////////// Promise 4th example /////////////////////////////
// chaning mean k promise consume ki data ko andar use karna matlb child perent concepet ko chaning bolty hen 
// is program men resolve then or reject catch uthata hai 

//const promiseFour = new Promise(function(resolve,reject){
//code goes here of promsise 
//})
// promiseFour.then(function(resolve){
// code goes here of .then
// }).catch(function(reject){
//code goes here error
//});
 
const promiseFour = new Promise((resolve ,reject)=>{
setTimeout(function(){
const error = true;
if(!error){
  resolve({username : "Asif" , city : "shikarpur"})
}else{
	reject("error : SomeThing Want Wrong");
}
},2000);

}) 

promiseFour.then(function(user){
console.log(user);

}).catch(function(userError){
  console.log(userError);
})


// Chaning :  jo oper waly .then se value return hokar aaegi wohi dobara .then me aaegi 

const promiseFourth = new Promise(function(resolve,reject){
	setTimeout(function(){
     let error = false;
	 if(!error){
      resolve({name : "Hyder Ali" , age : 32});
	 }else{
		reject(" error: Here is a error ");
	 }
	},2000)
})

promiseFourth.then(function(user){
  console.log(user);
	return user.name;
}).then(function(name){
console.log(`I am ${name}`);
}).catch(function(error){
	console.log(error);
})

///    promise 5 adding finally() method finally har hall me chalega chahi resolve ho ya reject 

const promiseFive = new Promise(function(resolve , reject){
setTimeout(function(){
let error = true;
if(!error){
	resolve({name : "Dilbar khan" , email: "abc@gmail.com"})
}else{
	reject("Error : Acure Error Please check code")
}
},2000)
})

promiseFive.then(function(user){
 console.log(user);

}).catch(function(error){
	console.log(error);

}).finally(function(){
	console.log("Finally run code and gave massage resolve or reject DOnt know");
});

/// promise 6 using async await try catch 

const promiseSix = new Promise(function(resolve,reject){
	setTimeout(function(){
     let error = true;
	 if(!error){
      resolve({course : "JavaScript" , fees : 3000})
	 }else{
        reject("error Handle it six promise")
	 }
	},1000)
});

async function promiseHandle(){
	try { 
      const response = await promiseSix
      console.log(`response from promise ${response}`);
	} catch (error) {
		console.log(`error from promise ${error}`);
	}
   
}

            promiseHandle();


// promise seven real fatch api example 

const promiseSeven = new Promise(function(resolve,reject){
	setTimeout(function(){
    let error = true;
	if(!error){
		resolve({course : "reactjs", Teacher : "Hitesh"})
	}else{
		reject("data Field",error)
	}
	},1000)
})

async function handleData(){
	try{
		const response = await fetch(`http://jsonplaceholder.typicode.com/users`);
		console.log(response);
		const data = await response.json();
		console.log(data);
	} catch (error){
		console.log(error);
	}
}
       handleData();
