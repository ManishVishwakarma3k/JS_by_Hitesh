let score = undefined

//console.log(typeof(score));     //As a method if declared in parenthesis
//console.log(typeof score);

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

/*
In conversion operation, impure number like 33abc,string and undefined datatypes give an output as NaN(Not a number) on console.log
While null datatype gives an output as 0
*/

let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(typeof booleanIsLoggedIn);
//console.log(booleanIsLoggedIn);

/*
Examples for conversion operation on boolean listed below and their console log outputs
"" => False
String => True
0 => False; 1 => True
*/

let someNumber = 16

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);