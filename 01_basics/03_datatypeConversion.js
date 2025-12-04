/*
let score= "33"
let scorex= "33abc"
console.log(typeof score)
console.log(typeof scorex)

let valueInNumber = Number(score)
let valueInNumberx= Number(scorex)

console.log(typeof valueInNumber)
console.log(typeof valueInNumberx)

console.log(valueInNumberx)
*/
let score= null
let valueInNumber= Number(score)
console.log(valueInNumber)

let isLoggedIn= 1
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let name= ""
let namex= "aarin"
let nameBool= Boolean(name)
let nameBoolx= Boolean(namex)
console.table([nameBool, nameBoolx])