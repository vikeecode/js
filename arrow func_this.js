//arrow function
//this is current contest refer by this
const user={
    username:"vikas",
    price:927,
    welcomeMessage : function () {
        console.log(`${this.username},welcome to website`);
        //console.log(this);//this tell about current value
    }
}
//user.welcomeMessage()
//user.username="vishal"
//user.welcomeMessage()
console.log(this);//in the node enviorment only print {} or empty object like that but you go and check under console than you can see the window

//under the function you can not acess this
// function chai() {
//     let username="vikas"
//     console.log(this.username);
// }
// chai()
// const chai=function(){
//     let username="vikas"
//     console.log(this.username);
// }
// chai()//here also not use this
//how to write a arrow function

//basic syntax=()=>{}this is basic arrow function
// const addTwo=(num1, num2)=>{
//     return num1 + num2
// }
// console.log(addTwo(2,4));//basic example of arrow function

//one also to write a arrow function
//this is called implect return or if you can use return value than called explect return
//const addTwo= (num1, num2)=>  num1+num2//in react you very important for react
//you can also write one way also
//const addTwo=(num1, num2)=>(num1+num2)//the use of these beacket if you can add a object than without brackedt you can not use it 
//exampple
const addTwo=(num1,num2)=>({username:"vikas"})//then you can write like this
console.log(addTwo(2,5));//if you use a {} like this than you use the return value but you not use a brices than not use a reurn 
