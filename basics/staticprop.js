class User{
    constructor(username){
        this.username = username

    }
     MethodName(){
         console.log(`${this.username}`);
     }
    
     // hum chahte hen k jese he koi user login ho use user id mil jae 
     // static har use user ko acces nh deta jo object se instences hoa hai 
       static createId(){
               return `123`;
       }

       
}  






const chai = new User("Asif");
  //console.log(chai.MethodName());
 // console.log(chai.createId());


  class Teacher extends User {
      constructor(username , email){
         super(username)
         this.email = email


      }
}

const iphone = new Teacher("Hitesh" , "abc@gmail.com");
 console.log(iphone);
 console.log(iphone.createId());
 iphone.createId();

 // note : ye program ise liye nh chal raha hai k kio k humny createId per static lagaya hai,
 // static ase he kise ko acces nh de deta hai 