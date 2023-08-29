"use strict" //treat all JS code as newer version of Javascript

/*
Alert is used differently in nodeJS, javascript's engine is hidden within browser,
hence we get a pop-up while in browser/developer console where as in code editor we get an error
*/

// code readability should be high and prioritized. Avoid following examples

/*
console.log( 3 
    + 
    3); console.log("Manish")
*/

//For documentation refer MDN or https://tc39.es/ecma262/ (Standards for browsers and engines)

let name = "Manish"
let age = 26
let isLoggedIn = true
let state;

/* ==Primitive Datatypes==
number => Its range is 2 to the power 53 - 1 which we can get in memory address
bigint => Not generally used in small projects. It can be used in projects like trading platform, reddit,etc.
string => ""
boolean => true/false
null => Its actually a standalone value. Its a datatype in JS but is a standalone value as well. Its is specially a type here.
undefined => The value is not defined but the variable is declared.
symbol => Its useful in finding uniqueness. Highly used in figma and react

Note: Null is a representation of an empty value. Suppose a server sends 0 temperature as a value due to some technical glitch.
but it is a value like 0 degree temperature so we can assisgn it as null. Here we did not receive the temperature.

==Non Primitive Datatypes==
object => Explained in future for better understanding.
*/

console.log(typeof undefined)   //Output of undefined is undefined which is a datatype.
console.log(typeof null)   ////Output of null is object which is a not a primitive datatype.