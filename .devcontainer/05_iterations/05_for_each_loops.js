const coding = ['js', 'py', 'java', 'rb', 'c']

coding.forEach(function (extension){
    // console.log(extension);
})

coding.forEach( (ext) => {
    // console.log(ext);
} )

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (ext, index, arr) => {
    // console.log(ext, index, arr);
})

const myCoding = [
    {
        languageName: "Java",
        languageExtension: "java"
    },
    {
        languageName: "Javascript",
        languageExtension: "js"
    },
    {
        languageName: "Ruby",
        languageExtension: "rb"
    }
]

myCoding.forEach( (individualObject) => {
    console.log(individualObject.languageName);
} )

