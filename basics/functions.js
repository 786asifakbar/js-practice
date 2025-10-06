  //simple function
 /* 
  function simple(){
  console.log("simple function");
  }
  simple();   
   */
  


   // function with return values  
  /* 
  function withReturn(v1,v2){  
  return v1 + v2;
  }
  let result = withReturn(7,9,2,4);
  console.log(result);
  */
  
  
  
  
  
         /* function using with rest opeartor , rest operator used 
		  in perameters if comes most values it handle it */
		/*   
    function withtPerameter(...numbers){
    return numbers;
    };
    let res = withtPerameter(100,200,300,400,500,600,700,800,900,1000);
    console.log(res);
    */
         
		 
		 // First way array used with functions
		/*  let arr = [
           1200,340,400,520
          ];
		  
          function withArray(anOtherArr){
          return anOtherArr;
         }
          console.log(withArray(arr));

       */

        
	     // second way  , direct array used in arguments 
        /*  function withArray(OtherArray){
		 return OtherArray;
		 
		 }
		  console.log(withArray([120,200,10,30,40]));
  
        */
  
  
      // function with object first way to declear  
	  /* 
	  let myObj = {
	  username : "Asif Ali",
	  age  : 32,
	  phone : 097362214
	  
	  };
	  myObj.job = "Developer";
	  
	  function withObj(anOtherObj){
	  return anOtherObj;
	  };
	  console.log(withObj(myObj));
	  
	  
	  
	  
	  
	  // second way to declear function with object 
	    
		function secObj(obj){
        return obj;
	    }
		
	    console.log(secObj({name : "Ali", age : 21,city : "shop"}));
	  */
	  
	  
	  //let ary = [12,11,33,33,44];
	  //ary.push(23);
	  //function ExAry(OtherArr){
	  //return OtherArr[2];
	  //} 
	  //console.log(ExAry(ary));


//hoisting k function ko kise variabale me store karna , 
//function se pehly use nh kar sakty hen isko Hoisting kehte hen.  

//console.log(funOne(12));
//let funOne = function(x){
  //return x ;
//}





// scoping {}

//let x = 10 ;

//let c = x + a;
//console.log(c);

   //function xery(num){
   //const a = 12;
   //return num + a;

  // } 
 //console.log(xery(3));




//function user(){
  
  //const x = 10;
  //let   y = 20;
  //var   z = 30; // var bhi scope k bahar print nh ho raha hai 
  //console.log(x);
//};
  //console.log(z); 
  //user()
 

//function userName(){
//const useName = "Hitesh";
//function userAge(){
//const website = "youTube";
//console.log("Print in child function: " , useName);
//}
 //console.log("print perents function ", website);  
  // userAge();
//} 
  // userName();    
// note : 2 function men perent function khy asan chiled 
// Function me print kare saghon tha par child function maan parent me na 




/* 
function one(){
const a = 23;

function two(){
const b = 21;
console.log(a);

}

//console.log(b);
 two();

}

one();

*/
          //console.log(numOne(2));
          //function numOne(num){
		  //return num + 1;
		  
		  //};
		



 // Note jo function initilization se pehly run na ho use hum (-HOISTING-) kehte hen 
	  //console.log(hoist(4));
      //let hoist = function(nom)
	  //return nom + 2;
	 // }
      // console.log(hoist(4));	 





     let myObj = {
	  username : "Hyder Ali ",
	  email :  "abc@gmail.com",
	  phone :  3132334330,
	  city :   "sukkur",
	 };

    function myFunc(){
	
	}; 
	
	console.log(myObj);	
