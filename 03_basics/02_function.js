function calculateCartPrice(val1,val2,...num1) {
    return num1
}

console.log(calculateCartPrice(2,4,5,6));

const user = {
    username : "akash",
    price : 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// direct object pass
handleObject({
    username : "sam",
    price: 222
})


// Arrays in functions
const myNewArray = [200,333,555,666]

function returnSecondVAlue(getArray) {
    return getArray[1]
}
// console.log(returnSecondVAlue(myNewArray));
console.log(returnSecondVAlue([200,234,234,534,234]));
