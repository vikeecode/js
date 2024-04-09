// #primitive

//7 categories type: string ,number,boolean,null(empty),undefined,symbol,BigaInit


const score=50
const scoreValue=50.9//is same decimal is also considers as a number

const isLoggedIn=false
const temp=null
let userEmail;
//symbol example
const id=Symbol("123") //these are both are not same symbol represent a special value
const idAccount=Symbol("123")//here also

console.log(id === idAccount);
const bigNumber=1929393486096553n


//Reference(non primitive)



//Array,objects,function


//array example
const hero=["hanumaan","naagraj","shaktimaan"]
//object
 let myObj={
    name:"vikas",
    age:19,
}
//function
const myFunction = function(){
    console.log("hello word");
}


console.log(typeof myFunction);
console.log(typeof temp);//this null output is object

//********************************************

//memory
//there are 2 types of memory
//1:stack(in stack to use primitive type ) (when you define a stack than when you declare a variable give a copy)
//   2:heap memory(to use non primitive)(and than heap you have got a real value not copy{refernce})
//example

//stack

let myYoutubechannel="vikascodecampfree"

let myAnotherName=myYoutubechannel
myAnotherName="coffceaurwebdev"

console.log(myYoutubechannel);//the output is both is vikascodecampfree and 
console.log(myAnotherName);// secound is coffceaurwebdev and copy come in stack 


//heap example

let oneUser={

    email:"vikas@gmail.com",
    instId:"vikee@instid",

}


userTwo=oneUser

userTwo.email="vishal@gmail.com"//in heap you can change direct not in copy  
console.log(userTwo);
