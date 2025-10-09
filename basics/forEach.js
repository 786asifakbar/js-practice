
            // for Each loop it is in modern style used in Object and array.

           let arr = [
		        "Sindh","Karachi","Pakistan",78100,800,3000
		    ];
			arr.forEach((item)=> { 
			console.log(item); 
			});		    
            
			
			let multi =[ 
			["Name","Number","age"], 
			["Asif",3153933660, 32], 
			["fareed",12324234 , 34] 
			]; 
			multi.forEach((val)=>{ 
			 //console.log(`value is : ${val.join(" ")}`); 
			}); 
			function printMe(item){ 
			//console.log(item); 
			}; 
			multi.forEach(printMe); 
			
			multi.forEach((val,index,arr)=>{ 
			console.log(val,index,arr); 
			}); 
			
			
			let users = [
  {
    name: "Asif",
    age: 32,
    city: "Karachi",
    phone: 3153933660,
    profession: "Web Developer"
  },
  {
    name: "Fareed",
    age: 34,
    city: "Hyderabad",
    phone: 3219876543,
    profession: "Graphic Designer"
  },
  {
    name: "Ali",
    age: 28,
    city: "Lahore",
    phone: 3001234567,
    profession: "Content Writer"
  },
  {
    name: "Ahmed",
    age: 30,
    city: "Islamabad",
    phone: 3331112233,
    profession: "Software Engineer"
  },
  {
    name: "Hassan",
    age: 27,
    city: "Sukkur",
    phone: 3017654321,
    profession: "Digital Marketer"
  }
];

users.forEach((item)=>{
console.log(item.name , item.age, item.city , item.phone,item.profession);
});



users.forEach( (val)=>{
console.log(val);
});

users.forEach( (val,index,arr)=>{
console.log(val,index,arr);
});

users.forEach(printMe);
function printMe(item){
console.log(item);
};
