//  Primitive 7 types

// String
// Number
// Boolean
// Null
// Undefined
// Symbol
// BigInt


// Reference/Non-Primitive type

// Array
// Objects
// Functions

// Inn sabka type object hi aata hai non primitive ka

const heroes = ["Superman","Spiderman","Ironman"]

console.log(heroes[1])

let bio  = {
    name : "Gaurav",
    age : 21
}

console.log(bio)

console.log(typeof bio)
console.log(typeof heroes)

// Memories

// Stack (primitive mai use hoti h)
// Heap (non-primitive mai use hoti h)

let myName = "Gaurav"
let anotherName = myName
// yha stack mai ek copy store hogi my name ki jo anothername ko assign hogi aur myname mai jo bhi change hoga yha pe woh original my name mai nhi hoga
console.log(anotherName)
anotherName = "Swami"
console.log(anotherName)


// now in non primitive , heaps are used which do not make copies and the changes are done into itself only i.e the reference is passes if it is given to some ottther variable and the other variable works on the asame data as the original variable

let profile1 = {
    userName : "Gaurav",
    userEmail : "gaurav@gmail.com",
    userAge : 25
}
console.log(profile1)

let profile2 = profile1
profile2.userEmail = "geezes@gmail.com"

console.log(profile1)
console.log(profile2)