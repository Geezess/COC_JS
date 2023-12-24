const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["spiderman", "shaktiman"];

console.log(myArr[2]);
console.log(myArr.length);
myArr.pop();
console.log(myArr.length);

console.log(myHeroes.length);
myHeroes.push("superman");
console.log(myHeroes.length);




// slice and splice

console.log("Original Array ", myArr);

let myNewArr1 = myArr.slice(1, 4);
console.log("New Array is ", myNewArr1);
console.log("Original Array ", myArr);

let myNewArr2 = myArr.splice(1, 4);
console.log("New Array is ", myNewArr2);
console.log("Original Array ", myArr);

// splice mai original array mai se woh elements delete ho jaate hai




const marvel_heroes = ["spiderman", "thor", "ironman"];
const dc_heroes = ["batman", "superman", "aquaman"];

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes)
marvel_heroes.pop()

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes)

// another way to concate multiple arrays is using spread(...)

const allNewHeroes = [...marvel_heroes,...dc_heroes]
console.log(allNewHeroes)



// conversion to Array

console.log(Array.isArray("Gaurav"))
console.log(Array.from("Gaurav")) //string to array



// making arrays of given data

let a = 100
let b = 200
let c = 300

console.log(Array.of(a,b,c))
