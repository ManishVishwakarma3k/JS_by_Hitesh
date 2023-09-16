// 2 ways to declare an object in JS - literal and constructor. When you are creating using constructor then a singleton object is created.

//Singleton - object.create(Using a constructor) - Explained in future notes

//Object literals
//Objects have a key and value structure. You can define your key as well as value.
//The key part of the structure is always processed as a string but not written in double quotes.
//The value can be any datatype i.e. primitive or non-primitive.

const mySymbol = Symbol("react1")
const jsUser = {
    firstName: "ManiMau",
    "full Name": "Manish Bhagirath Vishwakarma",
    age: 26,
    email: "manish@github.com",
    location: "Pune",
    isLoggedIn: false,
    lastLoggedIn: ["Wednesday", "Friday"],
    [mySymbol]: "native2"
}

// console.log(jsUser);
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full Name"]);

jsUser.firstName = "Manio"
// console.log(jsUser["firstName"]);

// Object.freeze(jsUser)
jsUser.firstName = "Manish"
// console.log(jsUser["firstName"]);

jsUser.greeting = function(){
    console.log("Hello JS Learner");    
};
jsUser.greetingTwo = function(){
    console.log(`Hello JS Learner, ${this.firstName}`);    
};

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());