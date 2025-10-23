
class User{
constructor(userName, userEmail, userPassword){
      this.userName = userName;
      this.userEmail = userEmail;
      this.userPassword = userPassword;
     
   }
    changeuserName(){
        return `Name : ${this.userName} Email: ${this.userEmail} Password: ${this.userPassword}`
    }

}

const userData = new User("Asif","abc@gmail.com","123edcfr23");
console.log(userData);
console.log(userData.changeuserName());


// inheretance 

class Teacher extends User {
    constructor(userName , userEmail , userPassword , course){
        super(userName,userEmail,userPassword);
        this.course = course
    }
       newCourse(){
        return `course : ${this.course}`
       }


}

const mixed = new Teacher("Fareed","sdc@gmail.com","123wsde321","Javascript");
console.log(mixed.newCourse());



//Static Properties 

class userId extends Teacher{
    constructor(userName,userEmail,userPassword,course,newUserId){
         super(userName,userEmail,userPassword,course);
        this.newUserId = newUserId

    }

    static createUserUniqueId(){  // ye hai static ,static likhny k bad ab ise pata chala k ue class k liye hai object k liye nh ab error aaega  
        return `12345`
    }

}

    const userIdCreate = new userId("sheri","wed@github.com","qwes231","reactjs","1234567")
    console.log(userIdCreate.createUserUniqueId());
    /* note userIdCreate tak poora program sahi hai nechy jo console laga hai is k wajha 
    se error aa raha hai,kio k oper static lagany k bad ise pata chala k ye proprty srif 
    class use kar sakta hai object nh */ 