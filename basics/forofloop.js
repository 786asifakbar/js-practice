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

// for of loop used in array ,string, and other things
  
            let arr = [ 
            1,2,3,4,5,6,7 
            ]; 
			for(const ar of arr){ 
			//console.log(`this is for of loop ${ar}`); 
			}; 
			
            const fruits = ["Apple","Banana","mangose","pineApple"]; 
            for(const fruite of fruits){ 
		    //console.log(`Fruite : ${fruite}`); 
	        }		    
			
			for(fruite in fruits){ 
    		//	console.log(`For In loop : ${fruite}`); 
			} 
			
			let x = "Asif Akbars"; 
			//console.log(`Before for of loop : ${x}`); 
			for(const y of x){ 
			//console.log(`After for of loop : ${y}`); 
			} 
			
			let i = "31523455";  
            for(const b of i){ 
			console.log(b); 
			} 
  
            let y = 315342343;  
            for(const b of y){ 
			console.log(b); 
			} 
  
  
			let d = "true";  
            for(const b of d){ 
			console.log(b); 
			} 
  			
			
			let a = true;   
            for(const b of a){ 
			console.log(b); 
			} 
			
			
			let numbers = new Set([1,2,3,4,5,6,7,8]) 
			for(const num of numbers){ 
			console.log(`sets : ${num}`); 
			} 
			
			
			let map = new Map([
			["name", "Asif",],
			["role","Developer"]
			]);
			for(const [key,value] of map){
			console.log(key,"=",value);
			};
			
			
			
			
			
			