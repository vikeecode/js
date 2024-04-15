const score=500//here it bydeafult pick the value here is that it is number
console.log(score);
const balance= new Number(100)//here you define a number that it is a number
console.log(balance);

console.log(balance.toString().length);//here you check length of the number or make a string also

console.log(balance.toFixed(1));//here you can show in your code decimal type number

const otherNumber = 123.978
console.log(otherNumber.toPrecision(3));//here to showa a precision value means exact limit is (1-21)
const hundreds=1000000
console.log(hundreds.toLocaleString(`en-IN`));//here you write a number in any form like india,american type


//***********************maths****************

console.log(Math);//it is a object and use captial M
console.log(Math.abs(-2));// absoult value under this negative value convert into positive
console.log(Math.round(4.6));//if you can round off value you want than you can use it
console.log(Math.ceil(4.3));//if you can use top than use ceil means top
console.log(Math.floor(4.7));//here you can use floor means downward
console.log( Math.min(2,4,5,6));//if you find a minimum value under the array than you can use min 
console.log(Math.max(2,4,6,8));//if you can find maximum value under it than you can use it maximum
console.log(Math.random());//math.random ki value hamesa 0-1 ka bichme ayegi
console.log(Math.random()*10 +1);//if you remove the 0 not come than use this line or
console.log((Math.random()*10 )+1);//hare you can easily understand it
console.log(Math.floor(Math.random()*10)+1);//here you can remove long number come in terminal

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);//here you write min value case in always

