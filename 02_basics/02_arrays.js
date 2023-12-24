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