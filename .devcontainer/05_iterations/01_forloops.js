for (let firstIndex = 1; firstIndex <= 10; firstIndex++) {
    const element = firstIndex;
    // console.log(element);
}

for (let index = 0; index < 10; index++) {
    const element = index;
    if (index == 5) {
        // console.log("5 is the best number");
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and covered in loop ${i}`);
        // console.log(i + " * " + j + " = " + i*j); // Prints tables from 1 to 10
    }   
}

let newArray = ["Ironman", "Captain", "Thor", "Hulk", "Gamora", "Thanos"]
// console.log(newArray.length);
for (let index = 0; index < newArray.length; index++) {
    const element = newArray[index];
    // console.log(element);   
}

// Break and continue keywords

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         // console.log("Detected 5 in Index Value");
//         break
//     }
//     // console.log(`Value of index is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5 in Index Value");
        continue
    }
    console.log(`Value of index is ${index}`);
}