
// Memories two types ki hoti hai 
// 1. Stack (Primitive Datatypes Me Stack Memory use hoti hai) ------------> Variable ka copy milta hai
// 2. Heap  (Non-Primitive Datatypes Me Heap Memory use hoti hai) ------------> Reference Milta hai

// Stack
let myName = "Akash Kumawat"

let anotherName = myName
anotherName = "Akash Sir"

console.log(myName);
console.log(anotherName);


// Heap
let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "ak@gmail.com"
userTwo.upi = "ak@ybl"

console.log(userOne.email);
console.log(userTwo.email);


