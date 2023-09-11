// Categorized in 2 parts Primitive and Non-Primitive
// Difference is between callByValue and callByReference
// The difference is made based on how data is stored in memory and how do we access this data

// ##### Primitive Datatypes ##### (Call By Value)
/* E.g. When you copy these from one place to another then the reference of original data in memory
   is not provided to us rather a copy of this data is provided where we can perform our operation/changes
   and these changes are applied to copy and not on original data */
// These are divided into 7 Categories: String, Number, Boolean, null, undefined, Symbol(used to make a value unique), BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof anotherId);


const bigNumber = 132412346345678334645787863242353464545634342342n

// ##### Non Primitive Datatypes or referenceType #####
// These are the values in which reference from memory can be directly allocated.
// Basic Types: Array, Objects, Functions

const heroes = ["ironMan", "thor", "captianAmerica"];

let myObject = {
    name: "Manish",
    age: 25,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heroes);
console.log(typeof myObject);
console.log(typeof myFunction);
