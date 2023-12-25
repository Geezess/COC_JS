//  Immediately Invoked Function Expressions (IIFE)


// function chai(){
//     console.log("Hey")
// }
// chai()

// Sometimes global scope ke pollution se problem hoti hai isliye turant execute krne ke liye we use another way 

(function chai(){
    console.log("Hey")
})(); //yha semi colon na bhule kyuki ise nahi pta kb rukna hai.


( (name) => {
    console.log(`kya haal hai ${name}`)
})("Gaurav");
// yha arrow function ko naam bhi nai dena padd rha kyuki hum use direct iife se use kr rhe hai