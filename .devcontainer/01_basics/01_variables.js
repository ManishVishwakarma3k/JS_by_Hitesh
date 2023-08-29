const accountId = 144553;   
let accountEmail = "manish@google.com";
var accountPassword = "12345";
accountCity = "Pune"; //One more way to declare variable but should not be used
let accountState;

// accountId = 2; //Assignment to constant is not allowed

accountEmail = "mbv@mbv.com";
accountPassword = "21212112";
accountCity = "Jodhpur";

/*
Prefer not to use var declaration
because of the issue with block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
