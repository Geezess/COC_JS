const promiseOne = new Promise((resolve, reject) => {
    // DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async Task is complete');
        resolve()
    }, 2000)
})


promiseOne.then(() => {
    console.log('Promise comsumed')
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2")
        resolve()
    }, 2000);
}).then(() => {
    console.log("Async task 2 consumed")
})



const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: 'Gaurav', email: "Gaurav@example.com" })
    }, 1000);
})

promiseThree.then((resolveKaData) => {
    console.log(resolveKaData)
})



const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "Gaurav", password: 123 })
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((myUsername) => {
    console.log(myUsername)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log('The promise is either rejected or resolved')
})




const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "Gaurav", password: 123 })
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (rejectError) {
        console.log(rejectError)
    }// catch mai reject ka part aayega ki agar koi error aaye to gracefully catch kre
}

consumePromiseFive()



// Using try and catch

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');

//         const data = await response.json()
//         console.log(data)
//     }
//     catch (error) {
//         console.log('E: ', error)
//     }
// }



// Using .then and .catch

function getAllUsers() {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
    }).catch((error) => {
        console.log('E: ', error)
    })
}

getAllUsers()

