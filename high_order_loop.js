//for of loop
const arr=[1,2,3,4] //its num

for (const num of arr) {  // here not use any increment and any thing only use   value and object means any object you write in data type
   // console.log(num);
}
const greeting ="hello world!"//its a string
for (const greet of greeting) {
   // console.log(`each char is ${greet}`);
}

//Map

const map= new Map()
map.set('IN',"INDIA")
map.set('USA',"United State of America")
map.set('Fr',"france")
console.log(map);
//if you not add this destrucing than not do this you shown a full array
for (const [key,value] of map) {

    console.log(key,':-', value);
    
}

//if  a you have a object than what you do
const myObject={
    game1:'freefire',
    game2:'BGMI'
}
for (const [key,value] of myObject) {
    console.log(key,':-',value);
}//in forof loop is not iretable a object thats why be can use a another loop

