let name= "aarin"
let repCount= "50"
/*this is an outdated syntax for string concadination
console.log(name + repCount+ " values");*/

/*instead use backtics (``), coz this uses placeholder where we can directly inject variables in the print statement, something like a fstring in python.
This concept is known as string interpolation

console.log(`Hello my name is ${name} and my rep count is ${repCount} `)
*/
const gameName= new String('FireFox')// another method of declaring a string

console.log(gameName[0]);//this is for accessing any particular key or index.

console.log(gameName.__proto__);
/*
__proto__ shows the prototype of a JavaScript value — basically the hidden object from which it inherits built-in methods like toUpperCase, map, or slice. In Node.js, logging __proto__ often prints {} because Node hides non-enumerable prototype methods by default, while the browser console automatically expands and displays them
 */
console.log(gameName.length);//gives length
console.log(gameName.toUpperCase());//convert to upper case
console.log(gameName.charAt(2));//char at particular index
console.log(gameName.indexOf('o'));

const newString= gameName.substring(0,4)//gives a substring
console.log(newString);

const anotherString= gameName.slice(-7,3)
console.log(anotherString);

const trimString= "  aarin  "
console.log(trimString.trim())//removes white spaces
console.log(trimString.trimEnd())//removes space from end only

const mail= "aarinbadola633@google.com"
console.log(mail.replace('633','***'));

console.log(mail.includes('bad'))
console.log(mail.includes('633'))

const whatName= new String('big*juicy*buns')
console.log(whatName.split('*'));//split divides in an array based on any character , * in this case