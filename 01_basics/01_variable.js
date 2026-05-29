const accountId = 144556
let accountEmail = "hemantgupta9059@gmail.com"
var accountPassword = "12345"

// accountId = 2 // not allowed
accountEmail = "jnf.com"
accountPassword = "12125"
accountCit = "Jaipur"
accountCity = "sikar"
let accountState;
/*
prefer not to use var
bcz of issue in the block scope and functional scope
*/
console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCit, accountCity, accountState]);