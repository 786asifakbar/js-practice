
function User(username , logedIn , userCount){
     
    this.username = username; 
    this.logedIn = logedIn;
    this.userCount = userCount;
   
    // this.greeting = function(){
    //     console.log(`Welcome : ${this.username}`);
    // }

    //return this;

}

const userOne = new User( "Asif" , true , 8 );
console.log(userOne);