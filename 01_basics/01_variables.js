const accountId = 144556
let accountEmail = "vishakhaarya@gmail.com"
var accountPassword = "123445"
accountCity = "Jaipur"
let accountState
// accountId =2 // not allowed
/* 
prefer not to use var
becuase of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])