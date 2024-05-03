//how manyb truthy and falsy value in js 
//falsy value:-  false,0,-0,bigint(0n),"",null,undefined,NaN
//and after that every value is truthy  value
//truthy value:-"0",'false'," ",[],{},function(){}empty function  
const userEmail=[]
//if you have a empty array than how to check
if (userEmail.length===0) {
    console.log("Array is empty");
} 
const emptyObj={}

if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty");
}

//in console  if you compare a false ==0 than it is true
//and false =='' than it is true
//and 0=='' it is also a true these are important 

//logical operator 
//it is new operator Nullish Coalescing Operator(??):null undefined it depend only two things
//this operator work if you have a null operator than it check the safty and if any prbl come in null or udefined than its check safety
//syntax 
let val1;
//val1=5??10
//val1=null??10
//val1=undefined??12
val1=null??10??20 //in this case if come first value come than is take
console.log(val1);


//note:- terrinary operator and nullish coalesintg operator are different thing
//terinary operator
//syntax
//conditon ? true : false
let iceTeaPrice = 100
iceTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80");