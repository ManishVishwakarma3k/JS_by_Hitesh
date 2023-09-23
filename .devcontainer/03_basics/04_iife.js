// IIFE (Immediately Invoked  Function Expressions)
// To avoid pollution of function variables from Global Scope variables as they can be accessed inside function.

(function coffee () { // This is a named IIFE
    console.log("Hi there! I'm the first IIFE");
})(); //It invokes but doesn't know where to stop the context so use ; explicitly 

//() = 1st parenthesis is Function Definition () = 2nd parenthesis is Functon Call

((vmName) => { //Simple IIFE
    (console.log(`Hello! ${vmName} I'm the second IIFE`))
})("Sturdy")