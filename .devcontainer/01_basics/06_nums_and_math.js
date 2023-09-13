const score = 400
// console.log(score);

const balance = new Number('48950')
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const decimalNumber = 0.456723

// console.log(decimalNumber.toPrecision(8));

const hundreds = 100000000000000

// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++++++++++++++ ##### Maths ##### +++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math.PI);
// console.log(Math.abs(-6));
// console.log(Math.round(23.5));
// console.log(Math.ceil(32.1));
// console.log(Math.floor(32.9));
// console.log(Math.min(2, 3, 7, 1, 9, 7));
// console.log(Math.max(2, 3, 7, 1, 8, 7));

console.log(Math.random()); //Gives a random value between 0 - 1 in decimals
console.log((Math.random()*10) + 1); // Excludes zero and moves the first value to units place.
console.log(Math.floor((Math.random()*10) + 1)); // Gives rounded-off value

const minValue = 30
const maxValue = 60

console.log(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue); // Values in specific range
