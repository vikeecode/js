//control flow basics
//control flow first is if statement
//   const isUserLoggedIn = true
//   const temperature = 41

//   if (temperature===40) {
//     console.log("less than 50");
//   }
//   else{
//     console.log("temperature is greater tghan 50");
//   }
//   console.log("execute");
//scope realted
//const score=200
// if (score>100) {
//     const power ="fly"
//     console.log(`user power ${power}`);
// }
//console.log(`user power:${power}`);//this line not execute beacuse the scope of vriable in functional scope its under the braces only

//short hand notation
// const balance=1000
// if (condition>500) console.log("test"),//implect scope its mean you imagine that here your  braces  present{} 
// console.log("test2");//if you want a write a multiple line then you can use a comma , like that and end with ; semicolon    but never write  like that
//nested if
// const balance=1000
// if (balance < 500) {
//     console.log("less than");
// }
// else if (balance<750) {
//     console.log("less than");
    
// }
// else if (balance < 900) {
//     console.log("less than");
    
// }
// else{
//     console.log("less than 1200");
// }


// now how you can use  in real life

const isUserLoggedIn=true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (isUserLoggedIn && debitCard && 2==3) { //this is && called a AND it means both condition is ture otherwise code will not execute and it declare multiple condition

    console.log("allow to buy course");
    
}
if (loggedInFromGoogle || loggedInFromEmail) {  //this is || called a OR means only one condition is true and here  also declare a multiple condition
    console.log("user logged in");
}

  


