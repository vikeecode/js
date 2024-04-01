   //  var a;
   //  console.log(a);//hoisting
   //  a=12;
  /* var a=[12,13];
   var b=a;
   b.pop();*/
   //conditionals
  /* var age= 0;
   if(age>0){
    console.log("you are kid now");
   }
   else if (age>15) {
    console.log("you are adult");
   }
   else{
    console.log("you are teenager");
   }*/
  // push pop sift unsift spice
  //let arr=[12,13,14,15,16];
  //arr.push(20);
 // arr.pop();
 //arr.shift();
 //arr.unshift(0);
 //arr.splice(2,1, 19)hers splice you can remove aur add anything
 // console.log(arr);
 //functions
/*function helobolo(){
    console.log("hello");
}
helobolo();*/
/*function abcd(a,b,c){
    console.log(a,b,c);
}
abcd(13,14,15);
abcd(12,13,16);*/
//objects
/*let o={
    name:"vikas",
    "job code":5600,
    "is_handsome" :true
}
console.log(o);
o.salary = "1000core";
console.log(o);
o.salary = "5000crore";
console.log(o);*/
/*var a=12;
if(a<=12){
    console.log("hii");
}
else{
    console.log("heloo");
}*/
// for(let i=0;i<10;i++){
//     console.log(i);
// }
// console.log(i);
// function abcd(x,y,z){
//     console.log(x,y,z);
// }
// abcd(1,2,3);
// abcd(2,5,0)
// var arr=[1,4,5,6]
//how to copy reference value
// var arr=[1,5,4,3,6];
// var b=[...arr];
// b.pop();
//how to copy objct value
// var obj={
//     name:"vikas"
// };
// var b={
//     ...obj
// };
//turthy falasy
// if(0){
//     console.log("helo");  //this is falasy statement
// }
// else{
//     console.log("hii");
// }
  //forEach loop
//   var a=[1,23,4,34,5,6,7,8,36,43];
//   a.forEach(function(val){
//     console.log(val+2);
//   })
//forin loop
// var obj={
//     name:"vikas",
//     age:19,
//     city:"up",
// };
// for(var key in obj){
//   // console.log(obj[key]); 
//   //console.log(key,obj[key]);
//  // console.log(key)
// }
// call back function
//  setTimeout (function(){
//     console.log("5secound baad ren karo");
// },5000);
function abcd(a){
    a();

} abcd(function(){
    console.log("heloo");
});