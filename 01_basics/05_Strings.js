const name = "Akash"
const age = 18

// console.log(name + age + "GoodBoy"); // outdated syntax

console.log(`Hello my name is ${name} and my age is ${age}`)  // New Syntax For Concatenation ...K/as String Interpolation

const gameName = new String('Akash-KK') // object create kari hai new se

console.log(typeof gameName);

console.log(gameName[0]); // Key : Value Access method 
console.log(gameName.__proto__); // Give you object

console.log(gameName.length); // Give you length of string
console.log(gameName.toUpperCase()); // convert string in upper case...

console.log(gameName.charAt(3)); // Give you charcter at position 3
console.log(gameName.indexOf('s')); // Give you index value of 's'

const newString = gameName.substring(0, 4) // give you (0,n-1) value like ye 0 1 2 3 ki index value dega // ye negative values nahi leta
console.log(newString);

const anotherString = gameName.slice(-8, 3) // give you (0,n-1) value like ye 0 1 2 3 ki index value dega // it could be in negative
console.log(anotherString);

const newString1 = "   InfluenceUp   "
console.log(newString1);
console.log(newString1.trim()); // starting and ending spaces remove kar deta hai...


const url = "https://akash.com/akash%20Kumar"
console.log(url.replace('%20' , '-')); // replace kar dega %20 ko - ke sath...

console.log(url.includes('akash'));  // available hai ki nahi
console.log(url.includes('Kumawat')); // available hai ki nahi

console.log(gameName.split('-')); // split kar diya string ko toh - ki left right string dega