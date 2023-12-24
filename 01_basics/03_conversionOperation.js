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



