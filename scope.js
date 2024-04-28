//var c=300  //this is a global scope if you write here than you can run under a block scope but if yiou can write a value in block scope not use a outside a block
let a=300
if (true) {  // this is called a block scope under the block scope if you write a block then you can console under a block scope
    let a=10
   const b=20
    var c=30  // and var are both global and block scope both
    console.log("inner:",a);
    
}
//console.log(a);
//console.log(b);
//console.log(c);


//nested scopoe  //nested function  child function acess the parent value

function one(){
      const username="vikas"
      function two(){
        const website="google"
        console.log(username);
      }
      //console.log(website);
      two()    //when execute at a same time two also execute
}
one()

if (true) {
    const username="vishaal"
    if (username==="vishaal") {
        const website="instagram"
        console.log(username + website);
    }
    //console.log(website);  // these both are not acess 
    
}
//console.log(username); //this line also
//++++++++++++++interesting++++++++++++++++++++
console.log(addOne(5))//here not show a error
function addOne(num){
    return num+1
}
//addOne(5)//the difference is if you can write this line in top iof this function than not show in in any error but

//you can write one also  a function
//addTwo(3)//but here you shown a error than come a one topic called a hoisting 
const addTwo = function(num){
    return  num+2

}
//addTwo(3)//but this line show a error beacuse its function hold in variable