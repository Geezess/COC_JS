// For

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0)
        console.log(i)
}


let myArray = ["hey" , "hello" , "hi" , "namaste"]

for (let i= 0; i < myArray.length; i++) {
    console.log(myArray[i]);
    
}



// Break and Continue

for (let index = 0; index < 10; index++) {
    if (index == 2){
        continue;
    }
    else if(index < 5){
        console.log(index)
    }
    else{
        break;
    }
}