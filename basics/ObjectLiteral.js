// const user ={
//     username : "Hitesh",
//     loginCount : 8,
//     signedIn : true,
   
//      getuserDetail : function(){
//         //  console.log(`this is object literal`);
//         //  console.log(`username : ${this.username}`);
//             console.log(this);
           
//      }
// }

// console.log(user.username);
// //console.log(user.getuserDetail());
// console.log(this);

//const promiseOne = new Promise() 
//const date = new date()
// yahan jo new kayword use hoa hai yahi constructor function hai .. 


//is function men jo this keyword k sath hai wo variable name hai or dosra value hai jo function k through hum pass kar rahe hen 
    function User(username , userLogedIn, userCount){
     this.username = username;
     this.userLogedIn = userLogedIn;
     this.userCount = userCount;

    this.greeting = function(){
        console.log(`Welcome : ${this.username}`);
    }

    
     return this ;
    // phir bhi program chal raha hai iska matlb return this likho ya na likho farq he nh parta hai
    
    

}
 // is me value user two ny overwrite kar di hai ise masly se bachny k liye new keyword constructor function ka use hota hai
// const userOne = User("hitesh",true,12);
// const userTwo = User("chai aur code ",false,9); 
// console.log(userOne);

const userOne = new User("Hitesh", true , 12);
const userTwo = new User("chai aur code" , false , 8);
console.log(userOne.constructor);
console.log(userTwo.constructor);