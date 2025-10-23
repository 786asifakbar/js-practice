//  class User  {
//           constructor(username , email , password){
//             this.username = username
//             this.email = email
//             this.password = password
          
        
//         }
//            encryptPassword(){        // ye ak method hai is me function etc use nh kiya ja sakta 
//             return `${this.password}abc`
//         }
//         changeUserName(){
//             return `${this.username.toUpperCase()}`
//         }

//         changeEmail(){
//             return `${this.email}`
//         }

//  }

//  const chai = new User("Asif","abc@gmail.com","1234asw56");
//  console.log(chai);
 
//  console.log(chai.changeUserName());
//  console.log(chai.changeEmail());
//  console.log(chai.encryptPassword());

// ye oper wala program classes ka hai 
 // behind the scen :  classes any se pehly ase use hota tha ab classess aagae hen to wese use hota hai  
// ye program function ko use kar k banaya gaya hai

//  function User(username , userEmail ,userPassword){
//          this.name =  username
//          this.Email = userEmail
//          this.Password = userPassword
//      }

//  User.prototype.encryptPassword = function(){
//     return `${this.Password}`
//  }

//  User.prototype.changeUsername = function(){
//     return `${this.name}`
//  }

//  User.prototype.changeUserEmail = function(){
//     return `${this.Emial}`;
//  }

// const tea = new User("Asif", "asd@gmail.com", "123hjfb33");
// console.log(tea);

// console.log(tea.changeUsername());
// console.log(tea.changeUserEmail());
// console.log(tea.encryptPassword());













// class car{
//         constructor(carColor, carEngin , carService){
//             this.carColor = carColor
//             this.carEngin = carEngin
//             this.carService = carService

//         }
               
//            changeCarColor(){
//             return `${this.carColor}`
//            }
//            changeCarEngin(){
//             return `${this.carEngin}`
//            }
            
//            doCarService(){
//             return `${this.carService}`
//            }

// }

// const model = new car("Green", "good", true);
// console.log(model);
// console.log(model.changeCarColor());
// console.log(model.changeCarEngin());
// console.log(model.doCarService());

class carTwo{
    constructor(carColor , carService, carCondition){
             this.color = carColor
             this.service = carService
             this.condition = carCondition
    }
          
             changeColor(){
                return `${this.color}`
             }

             isService(){
                return `${this.service}`
             }
           isCondition(){
            return `${this.condition}`
           }

}

     const carModel = new carTwo("lightblue", true, false);
     console.log(carModel);
     console.log(carModel.changeColor());
     console.log(carModel.isService());
     console.log(carModel.isCondition());





