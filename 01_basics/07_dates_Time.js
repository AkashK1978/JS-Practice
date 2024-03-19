
let myCreatedDate = new Date("01-14-2024")
console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // miliseconds me time dega

// console.log(myTimeStamp.toLocaleString());
// console.log(myCreatedDate.getTime());


console.log(Date.now());
console.log(Math.floor(Date.now()/1000)); // seconds me convert kar dega

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday:  "long",
    
})


