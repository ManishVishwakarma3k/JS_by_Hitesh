// const snapUser = new Object()
const snapUser = {
    id: "001",
    username: "MSD",
    isLoggedIn: false
}
//Another way of assigning values to object but will overwrite previous values.
// snapUser.id = "002"
// snapUser.username = "MSD_007"
// snapUser.isLoggedIn = true

// console.log(snapUser);

const instaUser = {
    email: "mbv@123.com",
    userNameDetails: {
        userFullName: {
            fName: "Manish",
            lName: "Vishwakarma"
        }
    }
}

//console.log(instaUser.userNameDetails.userFullName.lName);

const object1 = {1: "A", 2: "B"}
const object2 = {3: "C", 4: "D"}
const object3 = {5: "E", 6: "F"}

// const object4 = {object1, object2}
// const object4 = Object.assign({}, object2, object3) Option to be known

const object4 = {...object1, ...object3} // Usually used method.
// console.log(object4);

const serverReceivedUsers = [
    {
        id: 123,
        email: "user123@123.com"
    },
    {
        id: 456,
        email: "user456@123.com"
    },
    {
        id: 789,
        email: "user789@123.com"
    }
]

// console.log(serverReceivedUsers[2].email);

// console.log(snapUser);

// console.log(Object.keys(snapUser));
// console.log(Object.values(snapUser));
// console.log(Object.entries(snapUser));

// console.log(snapUser.hasOwnProperty("username"));

const codeLearner = {
    Firstname: "Zany",
    Lastname: "Orbit",
    Email: "zanyorbit@yahoo.com",
    RollNo: 169
}

// console.log(codeLearner.Lastname);

const {RollNo} = codeLearner //If you want to access Rollno instead of codeLearner.RollNo everytime
console.log(RollNo);

const {Email: Mail} = codeLearner //We can also access by other assigned name link "Mail"
console.log(Mail);

// JSON Talk and structure

// {
//     "Stark": "Ironman",
//     "OdinSon": "Thor",
//     "America": "Captian"
// }
