let username = "Manish"
const isUserLoggedIn = true

if (isUserLoggedIn) { // true/false can explicitly defined as an condition like if (true)
    //console.log(`Welcome to the webpage ${username}`);
}

let temperature = 25

if (temperature == 28) {
    //console.log(`The current temperature is ${temperature}`);
} else {
    //console.log(`The current temperature is more than ${temperature}`);
}
//console.log("Today's weather is Awesome"); //Out of scope of if statement so would execute every time

// Comparision Operator: <, >, <=, >=, ===, !==, ==, !=

let gamePoints = 16

if (gamePoints > 15) {
    let inGamePower = "Ironman Suit"
    // console.log(`Your in game power is ${inGamePower}`);
}

// console.log(`Your in game power is ${inGamePower}`); //Out of scope of if statement so couldn't access inGamePower variable

const balancePoints = 80

// if (balancePoints > 25) console.log("Balance points more than 15"), // Inline or implicit declaration without curly braces
//                         console.log("Balance points more than 25 as well"); //Not good for code readability

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

if (isLoggedIn && debitCard) {
    console.log("You can continue to buy course");
}

if (isLoggedInFromEmail || isLoggedInFromGoogle) {
    console.log("User has logged in successfully");
}