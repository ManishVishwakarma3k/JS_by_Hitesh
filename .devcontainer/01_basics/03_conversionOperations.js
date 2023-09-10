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
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *************************************** Operations *******************************************

let value = 12
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello "
let str2 = "Manish"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);  //If string is the first datatype then remaining all values are converted to string and concatenated 
// console.log(1 + 2 + "2");  //If number is the first datatype then following operation is performed and if further there is a string then it is concatenated

// console.log(3 + 4 * 5 % 3);