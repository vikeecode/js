//object literal
// const user= {
//     username:"vikas",
//     loginId : 3,
//     signedIn:true,
//     getDetails: function(){
//       //  console.log("Got user details from database");
//      // console.log(`username:${this.username}`);
//      console.log(this);
//     }
// }
// console.log(user.username);
// //console.log(user.getDetails());
//console.log(this);




//constructor function
function user(username , loginCount, isLoggedIn) {
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    return this
}

const userOne = new user("vikas",23,true)
const userTwo = new user("Naveen",12,false)
console.log(userOne);
console.log(userTwo);
