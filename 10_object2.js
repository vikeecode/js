//under  this video how to write a singleton and how to write consuctor help

//const tinderUser= new Object()//this is a singleton object 
// const tinderUser={} //this is not asingleton object
// tinderUser.name="sunny leon"
// tinderUser.isLoggedIn=false
// tinderUser.Id=28934
// //console.log(tinderUser);

// const regularUser={
//     email:"vikee@hmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"vikas",
//         lastname:"pandey"
//     }
// }

// }
// console.log(regularUser.fullname.userfullname.firstname);//if you write nested object how to declare like this



// //how to add object

// const obj1 ={ 1: "a", 2: "b"}
// const obj2 ={ 2: "a", 3: "b"}
// const obj3 ={ 4: "a", 5: "b"}

// //const obj4={obj1, obj2, obj3} //this is not a write  syntax to add object
// //const obj4= Object.assign({},obj1,obj2,obj3)// tjhis is line to correct syntax how to add a object

// // and you can use spread operator
// const obj4={...obj1, ...obj2, ...obj3} //this is line to also add a operator which is spread operator
// console.log(obj4);

// //if value come in database

// const user=[
//     {
//         id:1,
//         email:"s@gmail.com"
//     },
//     {
//         id:1,
//         email:"s@gmail.com"
//     },
//      {
//         id:1,
//         email:"s@gmail.com"
//     },
// ]
// //this type of  how to write delare
  // user[1].email  //this is way to write

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // this line convert into array in key 
// console.log(Object.values(tinderUser)); // this is line convert into array in value
// console.log(Object.entries(tinderUser));//every value convert into array

// console.log(tinderUser.hasOwnProperty(`isLoggedIn`));//this line tell is there property perent or not



//***************************/
//destractured
 const course={
     coursename:"js in hindi",
     price:"999",
     courseInstructor: "vikas"
 }
 //course.courseInstructor
 const {courseInstructor: instructor} = course //this line you de structure a any value 
 //console.log(courseInstructor);
 console.log(instructor);//you can also destructured also


 //API CONCEPT JSON = apka pass kuch value ayegi backend sa aur usko kasa likhega usko hi 
//  {
//     //"name":"vikas",
//     //"coursename":"js in hindi",  this is how look like json
//     //"price":"free"
//  }
[
    {},
    {},  // this also look like a json= json is a javascript object notation hai
    {},
]