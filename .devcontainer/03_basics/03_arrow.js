const user = {
    username: "Manish",
    price: 999,

    welcomeMessage: function (){
        console.log(`${this.username}, Welcome to your premium subscription`);
        console.log(this)
    } 
} //this keyword refers to current context i.e., scope of function within braces

// user.welcomeMessage()
// user.username = "Fluffy" //Context = Values that variables hold, what we are considering or talking about
// user.welcomeMessage() //Prints value of username from current context

// console.log(this); //In node env. this refers to empty object, as global doesn't have context
                      //In browser this refers to global object i.e., window object

function thisDemo() {
    console.log(this);
}
// thisDemo() // In node env, when you print [this] inside a func., we get multiple values

// function chai() {
//     let whoPrefersChai = "Manish and Hitesh"
//     console.log(this.whoPrefersChai);    
// }   //output is undefined, the context of this only works on objects for now**. Later on other ways

// chai()

// const chaiLover = function () {
//     const whoPrefersChai = "Manish and Hitesh"
//     console.log(this.whoPrefersChai);    
// }   // output is undefined

// chaiLover()

//Converting above function into an arrow function
const chaiLover = () => {
    const whoPrefersChai = "Manish and Hitesh"
    console.log(this.whoPrefersChai);    
}   // output is undefined

// chaiLover()

// const addTwoNumber = function (num1, num2) {
//     return num1 + num2;
// } 

// const addTwoNumber = (num1, num2) => {
//     return num1 + num2;
// } //This is basic arrow function

// const addTwoNumber = (num1, num2) => num1 + num2; //This is implicit return

// const addTwoNumber = (num1, num2) => (num1 + num2); //Do not use curly braces in such condition, if written then use of return keyword is mandatory.

const addTwoNumber = (num1, num2) => ({username: "Manio"})

// console.log(addTwoNumber(40, 30))

// const myArray = [2, 4, 5, 3, 8, 9]

// myArray.forEach()