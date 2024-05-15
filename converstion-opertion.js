let score="vikas"

console.log(typeof score);//both are correct
console.log(typeof (score));// both are correct
let valueNumber = Number(score)// this is the way to convert a string into number
console.log(typeof valueNumber);
console.log(valueNumber);

//if you given "33"or any number than output is given by 33
//and if you given like "33abc" then output is NaN
//and if you give true in boolean form then output is 1,or false is output is 0
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
//****************************operation*************************


let value=3
let negValue= -value
//console.log(negValue);

// console.log(2+2);   these are common operation
// console.log(2-2);
// console.log(2*3);
// console.log(2/3);
// console.log(2%3);
// console.log(2**5);//power ka liya use karta hai

let str1="hii"
let str2="vikas"
let str3= str1 + str2

console.log(str3);


console.log("2" + 2);//no coverstion the output is same 22
console.log(2+"2");//same as it is also
console.log("2" +2 +2);//here also a same no change
console.log(1+3+"4"); //here few change you see the output the is 44 but these are things are not good for pratrice

console.log(+true);//this is write but our code readability is not good to use

let num1,num2,num3

num1=num2=num3=2+2


let gameCounter=100
gameCounter++;
//++gameCounter // both are same but prefix or postfix to know how it work
console.log(gameCounter);


//postfix
let x = 2;
let y=x++
console.log(x);
console.log(y);



//prefix
let x1=3;
let y3=++x1
console.log(x1,y3);





 

