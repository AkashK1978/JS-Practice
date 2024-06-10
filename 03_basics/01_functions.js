
function sayMyname() {
console.log("A");
console.log("K");
console.log("A");
console.log("S");
console.log("H");

}

// sayMyname --> function ka refrence
// sayMyname()  // ---> function ka execution

// function addTwoNums(num1 , num2){
//     console.log(num1 + num2);
// }


function addTwoNums(num1 , num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNums(11,11)
// console.log("Result : ", result);

// function loginUserMessage(username){ 

    // if(username === undefined){
    //     console.log("please enter a username");
    //     return
    // }

function loginUserMessage(username = "sam"){  // ----> agar user koi values hi nahi deta hai toh aap yahi default set kardo

    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Akkkkkkk"));