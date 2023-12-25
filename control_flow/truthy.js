const userEmail = ""

if (userEmail) {
    console.log("Got Email")
}
else{
    console.log("No Email")
}


// falsey values
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// truthy value
// true , "false" , "0" , " " , [] , {} , function(){}



const myArr = []
if(myArr.length === 0){
    console.log("Array is empty")
}

const checkObj = {}
if(Object.keys(checkObj).length === 0){
    console.log("object is empty")
}