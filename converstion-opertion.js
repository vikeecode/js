let score="vikas"

console.log(typeof score);//both are correct
console.log(typeof (score));// both are correct
let valueNumber = Number(score)// this is the way to convert a string into number
console.log(typeof valueNumber);
console.log(valueNumber);

//if you given "33"or any number than output is given by 33
//and if youj given like "33abc" then output is NaN
//anjd if you give true in boolean form then output is 1,or false is output is 0\
//null=>0
//undefined=>NaN

let isLoggedIn ="vikas"

let booleanIsLoogeedIn = Boolean(isLoggedIn)//this is line tell the how to convert the string in boolean form

console.log(booleanIsLoogeedIn);
//1=>true;0=>false
//""=> false
//"vikas"=> true


let someNumber=33

let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


