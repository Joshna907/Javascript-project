const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"  //never use this type always use let or const
let accountState ; //undefined - output 

/* Prefer not to use var  because of issue in block scope and functional scope
*/


accountEmail = "hfc@google.com"
accountPassword = "34567"
accountCity = "london"
console.table([accountEmail, accountPassword, accountCity])
//accountId = 123456  //not allowed
console.log(accountId);