
//------ Numbers -----

const Price = 500;
// console.log(Price);


const Salary = new Number(100) // Yaha Data Fix Ho Gya Ki Ye Number Hai...
// console.log(Salary);

// console.log(Salary.toString().length); // Number ko String me convert kiya fir sting ka method laga diya
// console.log(Salary.toFixed(2)); // decimal laga deta hai jese 100 ko 100.00 kar dega


const anotherNumber = 123.323

// console.log(anotherNumber.toPrecision(3)); // precision depends on you enter Value if you enter 3 then you must know ki number decimal se pahle 3 digit ka h
// // console.log(anotherNumber.toPrecision(5));

const num1 = 1000000
// console.log(num1.toLocaleString()); // US Counting Me Convert Kar dega ,,, laga ke
// console.log(num1.toLocaleString('en-IN')); // Indian Standard Counting Me Convert Kar dega ,,, laga ke

// console.log(Number.MAX_VALUE);  ---> Number ki max value dega
// console.log(Number.MIN_VALUE);   ---> Number ki min value dega
// console.log(Number.MAX_SAFE_INTEGER);    ---> Number ki max safe limit value dega ki itne hi number store kar sakte ho
// console.log(Number.EPSILON);     


// ++++++++++++++++++++++ MATHS ++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // negative ko positive me convert kar dega or positive to positive hi rhega..
// console.log(Math.round(4.3)); // round off kar dega 
// console.log(Math.ceil(4.2)); // jara sa bhi 4 se jayda hua toh ye 5 hi kar dega
// console.log(Math.floor(4.3)); // lowest value hi lega toh kuchh bhi likho 4 hi dega 
// console.log(Math.sqrt(64)); // square root dega...
// console.log(Math.min(4,3,6,7,8,9,1)); // sabse lowest value in array dega
// console.log(Math.max(4,3,6,7,8,9,1)); // sabse max value dega in array         

console.log(Math.random()); // hamesha value aayegi 0 or 1 ke bich me.. randomly
console.log(Math.random() * 10); // values ko shift kar dega
console.log(Math.random() * 10 + 1); // agar aesa case ho like 0.04 toh aese case me 10 se multiply karne par fir 0 aa jayega toh 
// Such Case Avoid karne ke liye hum 1 se add kar dete hai so that 0 naa aaye...

console.log((Math.random() * 10) + 1); // Right Format for writing this formula........
console.log(Math.floor(Math.random() * 10) + 1); // floor bhi lagaya jata hai to wrap up yaa round off to its lowest value

// in some case hum max bhi define karna hai or min bhi
const min = 10
const max = 20

console.log(Math.floor( Math.random() * (max - min  + 1)) + min ) 
// toh uss case ke liye humne math.random toh use kara hi hai uske sath humne (max - min + 1) bhi kara for that range jisme hume chahiye or + 1 for 0 case avoid kare
// uske baad humne dekha ye value vahi aa rahi hai jo uper thi toh uss case ko avoid karne ke liye ki minimum to itna chahiye humne usme min add kar diya

