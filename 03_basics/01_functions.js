function addNumbers(a,b){
    console.log(a+b)
}

let result = addNumbers(3,5) // yha result mai kuch store nai hua bcoz return value nhi hai.
console.log("Result is ",result)



function addNewNumbers(a,b){
    let newResult = a+b
    return newResult
}

const newResult = addNewNumbers(3,5)
console.log("Result is ",newResult)




// Another way to write a function is..

const addNum = function(num){
    console.log(num+2)
}
addNum(10)



function calculateCartPrice(...num1){
    console.log(typeof num1)
    // agar ye dots nai lagayenge num1 ke aage to woh type number show krega aur abhi object kyuki array ki tarah kaam kr rha.
    let element = 0
    for (let index = 0; index < num1.length; index++) {
        element = num1[index]+element;       
    }
    return element
}
// ye spread use krke hum jitni bhi inputs denge sb aate jaayenge vrna iske bina sirf first wala hi aayega.
console.log(calculateCartPrice(200,400,500))


 

function useObjects(anyobject){
    console.log(`welcome ${anyobject.username} , the price of course is ${anyobject.price}`) 
} 

const user = {
    username: "Gaurav",
    price: 199
}

useObjects(user)



myArray = [100, 200, 300, 400]

function getSecondElement(getArray){
    console.log(getArray[1])
}

getSecondElement(myArray)





console.log((addOne(5)))

function addOne(num){
    return num+1
}
// ye declaration of function mai hum kahin pe bhi call krr sakte  hai.


const addTwo = function(num){
    return num+2
}
console.log(addTwo(5))
// ye declaration mai baad mai hi call kr sakte hai coz woh function kisi variable mai store ho rha hai jo baad mai declare hoga.