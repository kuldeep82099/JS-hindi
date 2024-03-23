const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed in const value is fixed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var because at the begining in JavaScript
there was issue in block scope("{}") and functional scope so they introduce let and remove var 
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])