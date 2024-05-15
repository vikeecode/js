//more method in array
//spread operator

const marvrel_Heros=["thor","ironman","blackpanther"]
const dc_Heros=["superman","flash","batman"]

marvrel_Heros.push(dc_Heros)
console.log(marvrel_Heros);//here the output come 4index is full dc_heros come so we can use a spread operator

//if you excess the flas value than you can excess like thaat

console.log(marvrel_Heros[3][1]);
//spread
// in spread you can marge thr array
const all_New_hero=[...marvrel_Heros,...dc_Heros]
console.log(all_New_hero);

const another_array=[1,2,3,[4,5,6],7,[6,7,[9,3]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

//array check its array or not or convert also

console.log(Array.isArray("vikas"));//to check its array or not
console.log(Array.from);//to convert a array
console.log(Array.from({name:"vikas"}));//to convert a array//this important and to check first write key

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1, score2, score3));//it is a set of array create by of method