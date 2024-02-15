const accountId = 144525;
let accountEmail = "akash123@gmail.com";
var accountPassword = "12345"; // ye bahut kam use hota hai kyuki isme scope ka problem hota hai
accountCity = "Jaipur"; // aese bhi variable declare hota hai...
let accountState; 
/* agar javascript ke andar aap declare karke chhod dete hai or aap usme value naa de toh
    javascript usko undefined kar deta hai...
*/
// accountId = 2; // not allowed change nahi kar sakte const ko aap

accountEmail = "ak@123.com"
accountPassword = "121212"
accountCity = "Mumbai"
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope..
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
