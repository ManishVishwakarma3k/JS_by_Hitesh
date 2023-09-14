// Array Declaration
const myFirstArray = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Ironman", "CapAmerica", "Thor", "Wanda", 1, 2, 3]

//Another way of declaring array
const mySecondArray = new Array("Spiderman", "Hawkeye", "agentRomanov", "blackPanther")

// console.log(myFirstArray);
// console.log(myHeroes);
// console.log(mySecondArray);

// Array Methods

myFirstArray.push(10) // Adds and removes values at end of the queue
myFirstArray.pop()

myFirstArray.unshift(11) // Adds and removes values at start of the queue
myFirstArray.shift()

// console.log(myFirstArray.includes(4));
// console.log(myFirstArray.indexOf(3));
// console.log(myFirstArray);

// const newArray = myFirstArray.join()

// console.log(typeof myFirstArray);
// console.log(typeof newArray);

// Slice and Splice

console.log("A ", myFirstArray);

const mySlicedArray = myFirstArray.slice(0, 3)
console.log(mySlicedArray);

console.log("B ", myFirstArray);

const mySplicedArray = myFirstArray.splice(0, 3)
console.log(mySplicedArray);

console.log("C ", myFirstArray);