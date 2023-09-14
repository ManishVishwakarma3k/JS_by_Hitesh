// Array Declaration
//Array-copy operations create shallow copies(A copy whose properties share the same references(HEAP))
const myFirstArray = [0, 1, 2, 3, 4, 5]//Arrays are zero-indexed
const myHeroes = ["Ironman", "CapAmerica", "Thor", "Wanda", 1, 2, 3]//Arrays are resizeable

//Another way of declaring array
const mySecondArray = new Array("Spiderman", "Hawkeye", "agentRomanov", "blackPanther")

// console.log(myFirstArray.length);
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

// const newArray = myFirstArray.join() //Binds and Converts Array to string into comma seperate values

// console.log(typeof myFirstArray);
// console.log(typeof newArray);

// Slice and Splice

console.log("A ", myFirstArray);

const mySlicedArray = myFirstArray.slice(1, 3)
console.log(mySlicedArray);

console.log("B ", myFirstArray);

const mySplicedArray = myFirstArray.splice(1, 3)
console.log(mySplicedArray);

console.log("C ", myFirstArray);