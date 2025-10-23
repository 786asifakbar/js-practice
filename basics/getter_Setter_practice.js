class User{
    constructor(userEmail , userPassword){
           this.userEmail = userEmail
           this.userPassword = userPassword
      }
      get userEmail(){
          return this._userEmail.toUpperCase();
      }set userEmail(value){
           this._userEmail = value;
      }
      get userPassword(){
        return this._userPassword.toLowerCase();
      } set userPassword(value){
           this._userPassword = value
      }
}


const userData = new User("user@yahoo.com","Soomrokhan@1311");
console.log(userData);
console.log(userData.userEmail);
console.log(userData.userPassword);
