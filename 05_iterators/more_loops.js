// for of

const arr = [1,2,3,4,5]

for (const i of arr) {
    console.log(i)
}

const str = "hello"

for (const i of str) {
    console.log(i)   
}




const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift"
}

for (const key in myObject) {
    console.log(key)
    console.log(myObject[key])
}

for (const key in arr) {
        console.log(key)
        console.log(arr[key])
}




