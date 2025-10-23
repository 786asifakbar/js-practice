
class User {
    constructor ( email , password){
        this.email = email;
        this.password = password;

}       

       get email(){
              return this._email.toUpperCase();
        } set email(value){
           this._email = value
        }

      //   // jb bhi getter lagaogy to property method mean (function) ban jati hai 
      //    // agr koi password get karna chah raha hai to use return karengy 
      //    // getter value get karna 
         
          get password(){
             return this._password.toUpperCase(); //  ase bhi use kiya ja sakta hai
           // return `${this._password}hitesh`;       // or ase bhi 
         }
        
      //   // Note : _ under scror lagany ka maqasad k hum use new password de rahe hen jo bhi get karna chahta hai use
      //   // setter value ko set karna 
        
        
         set password(value){
              this._password = value
         }

}
                  

const hitesh = new User("abc@gmail.com" , "123wse3");
console.log(hitesh);
console.log(hitesh.email);
console.log(hitesh.password);

