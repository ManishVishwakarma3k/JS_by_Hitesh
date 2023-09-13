let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

//let myCreatedDate1 = new Date()
// let myCreatedDate1 = new Date(2023, 0, 26)
// let myCreatedDate1 = new Date(2023, 0, 26, 6, 45)
// let myCreatedDate1 = new Date("2023-01-26")
let myCreatedDate1 = new Date("02-14-2023")
// console.log(myCreatedDate1.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate1.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday: "long",
}));