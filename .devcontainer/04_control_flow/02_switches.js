// switch (key) { // Syntax of switch case. Used for multiple conditions
//     case value:
        
//         break;

//     default:
//         break;
// }

// const randomNumber = 5

// switch (randomNumber) { // Checks for key, key is the value that needs to be checked everytime here randomNumber
//     case 1:
//         console.log(`Value match the random number between 1 to 5 at ${randomNumber}`);
//         break; // if break is missing then all the code after matchcase is executed except default
//     case 2:
//         console.log(`Value match the random number between 1 to 5 at ${randomNumber}`);
//         break;
//     case 3:
//         console.log(`Value match the random number between 1 to 5 at ${randomNumber}`);
//         break;
//     case 4:
//         console.log(`Value match the random number between 1 to 5 at ${randomNumber}`);
//         break;
//     case 5:
//         console.log(`Value match the random number between 1 to 5 at ${randomNumber}`);
//         break;

//     default: //executes if none of the conditions match. Acts like else in if-else
//         console.log(`Value doesn't match the random number between the range 1 to 5`);
//         break;
// }

const randomMonth = "Hello"

switch (randomMonth) {
    case "Jan":
        console.log(`Value match the random month of the year at ${randomMonth}`);
        break;
    case "Feb":
        console.log(`Value match the random month of the year at ${randomMonth}`);
        break;
    case "Mar":
        console.log(`Value match the random month of the year at ${randomMonth}`);
        break;
    
    default:
        console.log(`Value not within first quater of the year i.e. from Jan to Mar`);
        break;
}

// All the conditional statements up until now work on 2 values i.e. T/F