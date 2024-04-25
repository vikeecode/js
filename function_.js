//basic syantax of function
function sayMyName (){
    console.log("v");
    console.log("i");
    console.log("k");
    console.log("a");
    console.log("s");
}
// sayMyName() // this tell the execution
//  function addTwoNumber(number1, number2){
//     console.log(number1+number2);
//  }

 //addTwoNumber(3,4)
// addTwoNumber(3,"3")//if add a string in  arrugment in than answer the output is 33
//here you can learn a many way to declare a function
 function addTwoNumber(number1, number2){
    // let result = number1+ number2 // this is a first way to write a function
    // return result //and after the return value nothing to run under the function
    return number1+number2
 }

 const result=addTwoNumber(3,4)
 //console.log("rersult:", result);

 function loginUserMessage(username= "sam"){    // in parameter you can use a default value 
    if (!username) {
        console.log("please enter a username");   
        return
        
    }
    return `${username} just logged in`
 }
 //console.log(loginUserMessage("vikas"));

 console.log(loginUserMessage());//if you share a empty arrugmets  than output is undefined and if you can writer a parameter than override a arrugment

//*************************part two of fuction */

function calculateCartPrice(val1,val2, ...num1){    //this is thre 3dot called a rest operator  and if you write a val than given value pass a val and than otgher value print
      return num1
}
//console.log(calculateCartPrice(200,400,300));

//how to print a object

const user ={
    username:"vikas",
    price:199
}
function handleObject(anyobject){
     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
// you are pass a direct price also 
handleObject({
    username:"vishal",
    price:100
})

const myNewArray=[200,300,100,400]
function retuenSecoundValue(getArray){
    return getArray[1]
}

//console.log(retuenSecoundValue(myNewArray));
//you can pass direct array also

console.log(retuenSecoundValue([200,500,800]));



