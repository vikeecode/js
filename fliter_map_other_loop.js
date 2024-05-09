//const coding =["js","ruby","java","python","cpp"]

//what if you store asa a variable
// const values=coding.forEach(  (item)=>{
//     console.log(item);
//     return item  //for each is not a return value
// } )
// console.log(values);

//filter operation

//basics of filter
 //const myNums =[1,2,3,4,5,6,7,8,9,10]
// //here you make a variable
// const newNums= myNums.filter((num)=>{   //if you use a braces than write a return is mandatory otherwise output is empty
//     return num>4
// } )
// console.log(newNums);

//if use same thing in for each

// const newNums=[]
// myNums.forEach( (num) => {
//     if (num>4) {
//         newNums.push(num)
//     }
// });

// console.log(newNums);//but filter method is good

//eample of map
//map is automatic return a value
//const myNumers =[1,2,3,4,5,6,7,8,9,10]

//const newNums=myNumers.map((num)=> num+10 )  //if you not open a braces than not use a return 
//chaning means you can use a two oe three method at a same time
// const newNums=myNumers
// .map((num)=> num*10)//if you add a another method than first method pass the value than you can anything do
// .map((num)=> num+1)
// .filter((num)=>num>=40)

// console.log(newNums);

//reduce
//syntax a check a copy
//example
const myNums =[1,2,3]
// const myTotal= myNums.reduce(function (acc,currval) {
//     console.log(`acc ${acc} and currval ${currval}`);//it show what value come under accoumlate and current value
//     return acc+currval
// },0 )//it is intial value 
//let try to write a arrow function
const myTotal = myNums.reduce( (acc,curr)=> acc+curr,0 )
console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:2999
    },
    {
        itemName:"data science course",
        price:12000
    },
]
const priceToPay= shoppingCart.reduce( (acc, item)=> acc + item.price,0 )
console.log(priceToPay);


