/*
------>>> JavaScript is a dynamically typed language <<<-------

datatypes generally 2 type ke hote hai 
1. primitive --> call by value hote hai ye --> values of actual parameters are copied to the function’s formal parameters, and 
the two types of parameters are stored in different memory locations. So any changes made inside functions are not reflected in the actual parameters of the caller.

2. Non primitive --> call by reference hote hai ye =>  Let’s say, we have an object stored in the variable “a”. 
The variable stores the location or the address where the object lives. Now we set b=a. Now that new variable “b” instead of pointing to a new location in the memory, 
points to the same location where “a” does. No new object is created, and no copy is created. Both variables point to the same object. 
This is like having 2 names.
This is called by reference. It behaves quite differently from by value. All objects interact by reference.

inko 2 basis pe divide kiya gya hai..
1st --> ki ye jo data hai ye memory me kis trah se store hota hai...
2nd --> ki aap kis trah data ko access kar sakte ho...

Primitive => 7 types ke datatypes hote hai => String,Number,Boolean,null,undefined,Symbol,Bigint

Non-Primitive (Reference) -->  Arrays , Objects , Functions

*/
// Arrays
const heroes = ["Shaktiman","Doraemon","Chhota Bheem"]

// Objects
let myObj = {
    name : "Akash Sir",
    age : 21,
    
}

const myFunction = function(){
    console.log("Helllllllo");
}