//loop
//for loop
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5) {
       // console.log("5 is the best number");
    }
   // console.log(element);
    
}
//loop ka andar loop
for (let i = 0; i < 10; i++) {
   // console.log(`Outer loop value${i}`);
        for (let j = 0; j < 10; j++) {
           // console.log(`inner loop${j} and inner loop${i}`);
          //  console.log(i+ '*' + j + '='+ i*j);//it is syntax a if you form a table
        }
    
}
let myArray=["flash", "batman","superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
  //  console.log(element);
}

//continue and break


for (let index = 1; index <=20; index++) {
     if (index==5) {
       // console.log(`Detected 5`);
        break //if you break any control flow than use a break if condition true than it come outdide the loop
     }


   // console.log(`Value of i is${index}`);
}
for (let index = 1; index <=20; index++) {
     if (index==5) {
       // console.log(`Detected 5`);
       // break //if you break any control flow than use a break
       continue  //ek bar ignore kar dta hai it not print but other values print 
     }


   // console.log(`Value of i is${index}`);
}

//while and do-while loop
// let index=0
// while (index<=10) {

//     console.log(`Value of index is ${index}`);
//      index=index+2  //this type also you can incearse a value   
// }

// let myNewArray=["Ironman","Thor","Hulk"]
// let arr=0
// while (arr<myNewArray.length) {
//     console.log(`Value is ${myNewArray[arr]}`);
//     arr=arr+1
// }

//do-while loop
let score=11

do {
    console.log(`scoreis${score}`);  //in do while one time loop is do in case is condition is not true
    score++
} while (score<=10);
     




