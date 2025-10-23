// admin editor ya or koi role set karny k liye ye neechy waly class with inheritance use hota hai  

class User{
    constructor(username){
        this.username = username;

    }
    logMe(){
            console.log(`admin : ${this.username}`);
    }
}

class Teacher extends User{   // ab pore functainality user ki teacher me aajaegi 
    constructor(username , email , password){
         super(username) // ase likheny the username ki this kayword khud lag jaega or teacher user ki data acces kar sakta hai 
        this.email = email
        this.password = password

    }
    addCourse(){
        //return `course : ${this.username}`
        console.log(`course : ${this.username}`);
    }

}
       
 const chai = new Teacher("Javascript","abc@gmail.com","123hgr345");
 console.log(chai);
 chai.addCourse();
 //console.log(chai.addCourse());

 const masalaChai = new User("masalaChai");
 console.log(masalaChai);
 //masalaChai.addCourse(); // user ko teacher jo acces nahy 
 console.log(Teacher instanceof User);
 //console.log(User === Teacher);