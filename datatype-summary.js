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
