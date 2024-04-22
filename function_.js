//basic syantax of function
function sayMyName (){
    console.log("v");
    console.log("i");
    console.log("k");
    console.log("a");
    console.log("s");
}
// sayMyName() // this tell the execurion
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

