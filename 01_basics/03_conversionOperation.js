let score = "33abc"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score) // jisme convert krna hai uska first letter caps mai.
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1
// null => 0
// undefined => NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn) //B caps mai.
console.log(booleanIsLoggedIn)

// 1 => true
// 0 => false
// "" => false
// "string" => true

let a = "33"
let b = "34"
console.log(a+b)
console.log(Number(a) + Number(b))

console.log("1" + 2 + 2)
console.log(2 + 2 + "1")
// jo pehle aayega log use lega

let count = 100
console.log(count) // 100 aayega
console.log(count++) // 100 aayega and value 101 ho jayegi
console.log(++count) // 102 aayega aur value bhi 102 hogi




