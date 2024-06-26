//Es6
//class
//class User {
  // constructor(username,email,password){
  //  this.username=username
   // this.email=email
   // this.password=password
 //  }
 //  encryptPassword(){
 //   return `${this.password}abc`
 //  }
 //   changeUsernmae(){
  //      return `${this.username.toUpperCase()}`
  //  }
//}
const chai = new User("chai","vikee@gmail.com","123")
//console.log(chai.encryptPassword());
//console.log(chai.changeUsernmae())
//behind the scene

//functpnality not available in clas than we can write like this
function User(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}
User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
User.prototype.changeUsernmae=function(){
    return `${this.username.toUpperCase()}`
}
 const tea = new User("tea","vishal@gmail.com","1234")
 console.log(tea.encryptPassword());
 console.log(tea.changeUsernmae())
 //inheritance

 class oneUser {
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
 }
  class Teacher extends oneUser{
    constructor(username,email,password){
        super(username)//this super method use for the come out in other constructor thing in available using this 
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course are added in ${this.username}`);
    }
  }
  const School = new Teacher("Rahul","vikee@gamil.com","27474")
  School.addCourse()
  School.logMe()
  const massaleChai = new oneUser("massalechai")
  massaleChai.logMe()
  console.log(School === oneUser);
  console.log(School instanceof oneUser);//instance off a boolean value it check 
  //Static property(prop)
  