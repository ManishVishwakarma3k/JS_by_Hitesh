function sayMyName() {
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
} // Defining a function

// sayMyName //Reference to the function 
// sayMyName() //Calling the function

// function addTwoNumbers(number1, number2){ //Parameters
//     console.log(number1 + number2);
// }

//addTwoNumbers(20, 30); //Arguments

function addTwoNumbers(number1, number2){ //Parameters
    // let results = number1 + number2
    return number1 + number2
}

const results = addTwoNumbers(10, 25)
//console.log(`The value of addition function is ${results}`);

function userLoginMessage(username = "You have"){//"You have" default parameter if argument is not passed
    if(!username){
        console.log("Please enter a your username");
        return
    }
    return `${username} logged in successfully.`
}

// console.log(userLoginMessage());

function calculateCartPrice(val1, val2, ...num1){//...rest operator packages multiple values and sends it as an array
    return num1
}

// console.log(calculateCartPrice(100, 200, 400, 800)); //val1 takes 100, val2 takes 200, remaining are displayed as array

const basicUser = {
    username: "barnacle",
    bookprice: "1999"
}

function handleUser(anyUser){
    return `${anyUser.bookprice} is the value to be paid by ${anyUser.username} for checkout.`
}

console.log(handleUser(basicUser));

console.log(handleUser({
    username: "Prajwal",
    bookprice: "10999"
}));

const randomPriceArray = [199, 299, 999, 4999, 11999]

function handleFifthValue(anyArray){
    return anyArray[4]
}

console.log(handleFifthValue(randomPriceArray));

console.log(handleFifthValue([199, 299, 999, 4999, 11999]));