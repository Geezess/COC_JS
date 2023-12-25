const user = {
    username: "Gaurav",
    age: 21,
    welcomeMsg: function(){
        console.log(`The username is ${this.username}`)
        console.log(this)
    } 
}
user.welcomeMsg()
user.username = "Geezes"
user.welcomeMsg()
// yha pe this apne respective object ko refer krta hai.
console.log(this)
// yha this kisi object ke andar nhi hai so empty braces dega.



function coffee(){
    let username = "Gaurav"
    console.log(this.username)
    // this sirf object ko refer krta hai yha pe ye function hai isliye undefined de dega.
}
coffee()



// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// ye hai general way lekin arrow function se hum aur easily value return krva sakte hai.

const addTwo = (num1 , num2) => (num1 + num2) // yha paranthesis laggte hai.

