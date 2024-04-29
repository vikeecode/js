//Immediately Invoked Function Expression (IIFE)

//if your code not polluted in global scoope than use a iife
//jo function turant execute ho jye and global scope ka pollution aur global scope variable or declartion ka pollution ka hatne ka liya iife ka use karta hai 
//syntax of iife is =()()
//normal how to write a iife
(function chai(){
    //it is called a name IIFE
    console.log(`DB CONNECTED`);
})();//if you write a two iife thanyou can write semicoln(;)
//HERE YOU CAN END THE FUNCTION  other if you write a another function than shown a error
//in arrow function function are also suppport
//example
((name) =>{
    //simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('vikas')//this is the way to declare a variable