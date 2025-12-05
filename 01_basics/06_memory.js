/* this is stack memory i.e no change was made in the "name" variable as its copy was given to "newName" variable*/
let name= "aarin badola"
let newName= name
newName= "Naughty badola"
console.log(name);
console.log(newName);

/*this is heap memory where reference is used and change in email by userTwo makes a change in the eamil bu userOne as well*/
let userOne= {
    email: "aarin@gmail.com",
    upi: "user1@ybl"
}
let userTwo= userOne
userTwo.email= "badola@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)