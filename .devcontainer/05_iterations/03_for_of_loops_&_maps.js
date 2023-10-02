// For Of Loops
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8]
for (const number of numberArray) {
    // console.log(`Each value in array ${number}`);
}

const greetings = "Welcome_User!"
for (const greet of greetings) {
    // console.log(`Value of Each Character of Strings seperated : ${greet}`);
}

// const myObject = { // Objects not iteratable using this for-of loop structure way
//     game1: "BGMI",
//     game2: "NFS",
//     game3: "Halo",
//     game4: "CS-GO"

// }
// for (const [key, value] of myObject) {
//     // console.log(key, ": ", value);
// }

// Maps

const map = new Map()

map.set('MH', 'Maharashtra')
map.set('RJ', 'Rajasthan')
map.set('KN', 'Karnataka')
map.set('GJ', 'Gujarat')

// console.log(map);

for (const iterator of map) {
    // console.log(iterator);
}

for (const [initial, state] of map) {
    console.log(initial, ": ", state);
}