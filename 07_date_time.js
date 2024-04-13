//date

let myDate=new Date()//how to print date and time
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate);//it is a object


// let myCreatedDate = new Date(2023,0,23)//here you print a sepecific date and under this month start in 0 means 0 is january
// console.log(myCreatedDate.toDateString());
//let myCreatedDate=new Date(2023 , 0 , 23 , 5 , 3)
//let myCreatedDate=new Date("2023-01-14")//here you see if you write form od yy-mm-dd then tou can write month (01)
let myCreatedDate=new Date("01-02-2023")//here you write a indian standard
//console.log(myCreatedDate.toLocaleString());
let myTimeStamp= Date.now()//you can write this way also to declare a date 
console.log(myTimeStamp);//here you time stamp you can use whes you make quize and pool also  here you deal with milisecound
console.log(myCreatedDate.getTime());//here you can compare a time how date book in project
console.log(Math.floor(Date.now()/1000));//here you can convert into secound also and remove decimal using math floor

let newDate=new Date()
console.log(newDate.getFullYear());//if you want a particular day or month or year than use get and add you want
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

//`${newDate.getDate}and the time is `//using string interpolltion using to write also

newDate.toLocaleString('default',{
    calendar:"american"
})