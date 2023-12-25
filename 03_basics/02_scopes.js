let a = 300

if (true) {
    let a =10
    console.log("Inner Value :",a)
}

console.log(a)



function one(){
    const username = "Gaurav"

    function two(){
        const websites = "youtube"
        console.log(username)
    }
    // console.log(website) // ye yha execute nhi hoga as woh apne scope pe bahar hai.bade choto se ice cream nhi mang sakte sirf chote maang sakte hai.
    two()
}
one()




