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





