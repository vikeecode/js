function multiplyBy5(num) {
    return num*5
}
multiplyBy5.power=2
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);//here it is a function is a function and object also
console.log(multiplyBy5.prototype);//it is also a object


//secound example new keyword
function createUser(username, score) {
    this.username= username
    this.score= score
}
createUser.prototype.increment = function(){
    this.score++;}
    createUser.prototype.printMe=function () {
        console.log(`price of ${this.score}`);
    }
    const chai =  new createUser("chai",20)
    const tea = createUser("tea",120)
    chai.printMe()


// exapmle of prototype
let myHeros = ["captainAmerica", "blackpanther"]

let heroPower = {
    captainAmerica: "superhuman strength",
    blackpanther: "superhuman agility",
    getCaptainPower: function(){
        console.log(`strength power is ${this.captainAmerica}`);
    }
}
Object.prototype.vikas = function(){
    console.log(`vikas is present in all objects`);
}
Array.prototype.heyVikas= function(){
    console.log(`vikas says hello`);
}
//heroPower.vikas()
//myHeros.vikas()// here you show the in object prototype is also acessable in array
myHeros.heyVikas()
//heroPower.heyVikas()//here is not accesable in object 

//inheritance

const User = {
    name : "vikas",
    email:"vikas@gmail.com",
}
const Teacher ={
    makeVideo:true
}
const TeachingSupport = {
    isAvailable : false
}
const TASupport={
    makeAssiagment : 'JS assiagment',
    fullTime:true,
    __proto__:TeachingSupport//but it is a old school code it is called a inheritance it is inherit a another object value

}
Teacher.__proto__=User
//modern syntax 
Object.setPrototypeOf(TeachingSupport,Teacher)
console.log(TeachingSupport.makeVideo);
console.log(Teacher.name)//vikas
console.log(TASupport.isAvailable);
//prblm slove
// let myName = "vikas   "//to reomve a backspace
// let mySecoundName = "akash"
// console.log(myName.trueLength);
//how to slove
let name = "vikas    "
String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True Length is : ${this.trim().length}`);
}
name.trueLength()
"akash".trueLength()
"Naveen".trueLength( )