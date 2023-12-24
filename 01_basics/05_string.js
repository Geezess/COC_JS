const firstName = "Gaurav"
const lastName  = "Swami"

 console.log(`Hello my name is ${firstName} ${lastName}`)

 console.log(firstName[2])
 console.log(firstName.length)
 console.log(firstName.toUpperCase())
 console.log(firstName.charAt(4))
 console.log(firstName.indexOf('r'))

 let gameName = "vicecity"

 console.log(gameName.substring(0,4))
 console.log(gameName.slice(2,-3)) // piche se -1 se shuru hota hai and aage se 0 se indexing also inme endlimits include nhi hoti

 let newGame = "   Hey  "

 console.log(newGame.trim())
 console.log(newGame.trimEnd())

 let newUrl = "gaurav.com/my%20profile"

 console.log(newUrl.replace('%20','-'))
 console.log(newUrl.includes('com'))
 console.log(newUrl.split('.'))

