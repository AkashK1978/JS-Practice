// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); ---> true
// console.log("02" > 1); ----> true

// console.log(null > 0);
// console.log(null >= 0);
// console.log(null == 0);
// console.log(null <= 0);

// The reason is that an equality check == and comparisons >,<,>=,<= work differently. 
// Comparisons convert null into a number treating it as 0.
// thats's why null >= 0 is true and null > 0 is false....

// console.log(undefined > 0);
// console.log(undefined >= 0);
// console.log(undefined == 0);
// console.log(undefined <= 0);
// ------> always give false...

// Triple Equal Check ===
    console.log("2" === 2); // ----> False
//  yaha conversion nahi hota yaha ye genuienly check karega or bolega bhai iska datatype alag hai..