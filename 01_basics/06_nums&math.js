let score = 400

let amount = new Number(4000) //strict datatype vese upar bhi woh number hi detect krega

console.log(score)
console.log(amount)
console.log(amount.toString())

let num1 = 23.4546

console.log(num1.toPrecision(5)) //decimal ke pehle se hi count krta h.output string mai aata hai

let num2 = 1000000000

console.log(num2.toLocaleString())

let num3 = -8.432

console.log(Math.abs(num3))
console.log(Math.round(num3))
console.log(Math.ceil(num3))
console.log(Math.floor(num3))

console.log(Math.round((Math.random())*6) + 1)