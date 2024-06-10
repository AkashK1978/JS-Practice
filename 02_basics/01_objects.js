// singleton object : - koi bhi constructor se banate hai tab singleton object banta hai..
// object.create

// object literals

const mySymbol = Symbol("Key1");

const Jsuser = {
  Name: "Akash Bhai",
  "Fullname": "Akash Kumawat",
  Age: 21,
  Address: "Jaipur",
  Email_Id: "akashsir@gmail.com",
  College: "JECRC University",
  IsLoggedIn: false,
  LastLoginDays: ["Monday", "Sunday"],
  [mySymbol]: "Mykey1",
};

console.log(Jsuser.Email_Id);
console.log(Jsuser["College"]);
console.log(Jsuser["Fullname"]);
console.log(Jsuser[mySymbol]);
console.log(typeof Jsuser.mySymbol);

Jsuser.Age = 22;
// Object.freeze(Jsuser);
Jsuser.Age = 21;

console.log(Jsuser);


Jsuser.greeting = function(){
  console.log("Hello User");
}
Jsuser.greetingTwo = function(){
  console.log(`Hello User,${this.Name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());