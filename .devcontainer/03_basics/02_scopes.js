// var c = 200

if (true) {
    const a = 1
    let b = 2
    var c = 3 // var doesn't obey block level scope
    c = 4 // Not only with var but this also O/P: 4
    //console.log("Inner A: ", a);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const userName1 = "cuddly "
    function two(){
        const userName2 = "system"
        // console.log(userName1);
    }
    // console.log(userName2); 
    two()
}
one()

if (true) {
    const myName = "Manish "
    if (myName == "Manish ") {
        const surname = "Vishwakarma"
        console.log(myName + surname);
    }
    // console.log(surname);
}
// console.log(myName);

// ================================================= Interesting ==============================================================

console.log(addOne(5)) // Hoisting
function addOne(number){
    return number + 1
}


// console.log(addTwo(6)); //Cannot access 'addTwo' before initialization

const addTwo = function(number){
    return number + 2
}

console.log(addTwo(6));