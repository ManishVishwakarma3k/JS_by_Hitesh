// console.log(2 > 1); //Comparision around numbers are Easy and the output is Boolean
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// Below conversion and comparisions can put you in confusion at any moment due to conversion of null into NaN or Zero(0) so try to avoid

// console.log("2" > 1); //JS automatically converts string to number for comparision
// console.log(2 > "01"); 

//Make sure that the datatype should be same while comparing to get predictable results.

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// Output of code: False, False, True and the problem occurs due to conversion. 
// Also comparision operator and equality operator have different way of functioning in JS

// Strict Check (===) not only check values but its datatype as well.

console.log("2" === 2);


