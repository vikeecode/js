//foreach loop
const coding =["js","ruby","java","python","cpp"]
//this is basic for each function
// coding.forEach(function (val){
//     console.log(val);
// })
//arrow function
//how to write a arrow function
// coding.forEach( (item)=>{
//    console.log(item);
// } )
//if you write a function before a for each loop than only gave a reference
//example
// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe)
// coding.forEach( (item,index,arraylist)=>{   //you can also write a arraylist:- is arr only
//     console.log(item,index,arraylist);
// } )  //in parameter not only item parmeter many other parameter are also available like:-item,index,and arraylist
//if you have a [{},{},{}] like this situation how to write a loop 
//example 
// it is very important
const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]
//how to use a loop in it
//it is important in database
myCoding.forEach( (item)=>{
    console.log(item.languageName);
} )





