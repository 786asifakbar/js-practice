
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ name: "Asif", course: "JavaScript" })

        } else {
            reject(`error : ${error}`)
        }
    }, 1000)
})
promiseOne.then(function (user) {
    console.log(user);
}).catch(function (error) {
    console.log(error);
}).finally(function () {
    console.log("Program Excuted of Promises");
})





class Students {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
        changer(){
            return `${this.username} ${this.email} ${this.password}`
        }

}

const excuteUser = new Students("asif", "abc@gmail.com", "1234674");
console.log(excuteUser);
console.log(`class with function : ${excuteUser.changer()}`);

class teacher extends Students{
    constructor(stdId , username , email,password , course , attendence ){
           
          super(username,email,password)
          this.stdId = stdId
          this.course = course
          this.attendence = attendence;
}
  //static
        createId(){
        return `${this.stdId}` 
     }           
}

const schoolData = new teacher("123","Fareed","abcdef@yahoo.com","1234edfr","javascript",43);
console.log(schoolData)
console.log(schoolData.createId())