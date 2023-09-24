// Logic Control also known as control flow
// Control flow of basic if statement
let username = "Manish"
const isUserLoggedIn = true

if (isUserLoggedIn) { // if will only execute if the condition is true,() hold the condition to be checked
    // value of condition is always T/F
    // true/false can explicitly defined as an condition like if (true)
    //console.log(`Welcome to the webpage ${username}`);
}

let temperature = 25

if (temperature < 28) {
    //console.log(`The current temperature is ${temperature}`);
} else { // This is conditional code, either if executes or else executes
    //console.log(`The current temperature is more than ${temperature}`);
}
//console.log("Today's weather is Awesome"); //Out of scope of if statement so would execute every time

// Comparision Operator: <, >, <=, >=, ===, !==, ==(Equality operator), != ( = is an assignment operator) 

let gamePoints = 16

if (gamePoints > 15) {
    let inGamePower = "Ironman Suit"
    // console.log(`Your in game power is ${inGamePower}`);
}

// console.log(`Your in game power is ${inGamePower}`); //Out of scope of if statement so couldn't access inGamePower variable

const balancePoints = 80

// if (balancePoints > 25) console.log("Balance points more than 15"), // Inline or implicit declaration without curly braces and scope is implicit
//                         console.log("Balance points more than 25 as well"); //Not good for code readability

// Nesting

if (balancePoints < 25){
    //console.log("Your Balance points are less than 25");
} else if (balancePoints < 50) {
    //console.log("Your Balance points are less than 50");
} else if (balancePoints < 75) {
    //console.log("Your Balance points are less than 75");
} else {
    //console.log("You have MAX balance points i.e., 99");
}

const isLoggedIn = true
const debitCard = true
const isLoggedInFromGoogle = false
const isLoggedInFromEmail = true

if (isLoggedIn && debitCard) { // Multiple Condition Check, && check left and right conditions and both should be true to succeed
    console.log("You can continue to buy course");
}

// Multiple Condition Check, || checks all conditions and any 1 condition should be true to succeed e.g.
if (isLoggedInFromEmail || isLoggedInFromGoogle) {
    console.log("User has logged in successfully");
}