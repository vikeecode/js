//why not change a pi value 
const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);
//beause in c++ its vaue fixed and writable false,enumerable false,configurable is also a false
const chai={
    name:'ginger cahi',
    price:240,
    isAvailable: true,
    orderChai:function(){
     console.log("chai nhi bni");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"))//to check here also what it property is writable,enumerable,configurable is true or false to see like this
//to control stop writable and enumerable
//to define our property
 Object.defineProperty(chai,"name", {//define property is control in our project in something to not change and confirgue 

     writable: false,
     enumerable: false
 })
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
for (const [key,value] of Object.entries(chai)) {//entries to iterate a object that why use a entries
   if(typeof value!== 'function'){ //this condition use jab apka code fatt jya then use this
    console.log(`${key}:${value}`);
   }
}