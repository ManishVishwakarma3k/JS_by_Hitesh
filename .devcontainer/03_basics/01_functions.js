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

function userLoginMessage(username){
    if(!username){
        console.log("Please enter a your username");
        return
    }
    return `${username} logged in successfully.`
}

console.log(userLoginMessage("Manish"));

