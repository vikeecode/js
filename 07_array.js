//array

const myArr=[0,1,2,3,4,5]//element are same or different are fine  and under the square bracket is called element
const myHeros=["ironman","lovebabber"]

const myArr2= new Array(1  ,2 , 3 ,4)
console.log(myHeros[1]);

//Array methos
 //myArr.push(6)//under it add one value under it backside
 //myArr.pop()//under it remove the value backside
 //myArr.unshift(2)//under it you add forntside of any value it
 //myArr.shift()//here you can remove one value in forntside
 //console.log(myArr.includes(9));//in arr is only the method you can ask a question and data type is boolean only cone true or false
// console.log(myArr.indexOf(9));//if you can ask a question not present in arr than give it negativevalue and if you gave a value present in arr than give a value
//const newArr=myArr.join()//here you can join arr and change a data type and data type convert in string
//slice and splice

const myn1=myArr.slice(1,3)//under it you can add only a given valueand not consider any other array
 console.log("A", myArr);
 console.log(myn1);
 const myn2=myArr.splice(1,3)//under it you can add you given 3 also considerd also and 
 console.log(myn2);
 console.log("B",myArr);//one difference is splice and slice is in arr no any change in slice but in splice change full arr in consdered splice under splice not add in arr
