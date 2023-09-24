// Values that are assumed to be true or false are called truthy or falsy values
const userEmail = ' ' // Truthy Value
if (userEmail) {
    // console.log("User email address was received from server.");
} else {
    // console.log("Server did not sent the user email address");
}

// Falsy Values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Truthy Values: true, "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0){ // Calling length property of array
    // console.log("Array is Empty");
    // console.log(typeof(userEmail));
}

const emptyObject = {}
// Call Object and end of day creates an array of keys == Object.keys(emptyObject) when passed with object
if (Object.keys(emptyObject).length === 0){ //Creates an array which can be accessed by length keyword 
    // console.log("Object is Empty");
    // console.log(typeof(emptyObject));
}

// Nullish Coalescing Operator (??): null undefined

let value1 = 5 ?? 10
value1 = 10 ?? 20
value1 = null ?? 30
value1 = undefined ?? 50
value1 = undefined ?? 25 ?? 35


// console.log(value1);

// Ternary operator
// Condition ? True : False

const bookPrice = 199

bookPrice <= 100 ? console.log("Bookprice <= 100") : console.log("Bookprice > 100");
