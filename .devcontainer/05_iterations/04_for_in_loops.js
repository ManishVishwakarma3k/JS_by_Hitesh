const myObject = {
    js: 'Javascript',
    py: 'Python',
    rb: 'Ruby',
}

for (const key in myObject) {
    // console.log(key); // For keys of myObject
    // console.log(myObject[key]); // For Values of myObject
} 

for (const key in myObject) {
    // console.log(`${key} is the shortct for ${myObject[key]}`);
}

const langExtensions = ['Js', 'Py', 'Rb', 'C']

for (const key in langExtensions) {
    // console.log(key); // Gives out index of the elements in the array
    // console.log(langExtensions[key]); // Gives the elements of the array
}

// const myMap = new Map // This method of iteration i.e., for_in loop doesn't work on maps

// myMap.set('js', 'Javascript')
// myMap.set('py', 'Python')
// myMap.set('rb', 'Ruby')

// // console.log(myMap);

// for (const key in myMap) {
//     console.log(key);
// }