const jsUser = {
  firstName: "Gaurav",
  lastName: "Swami", //iss form mai bhi key likh sakte h lekin phir usme dot use nai kar sakte.
  age: 22,
  email: "gaurav@gmail.com",
  isLoggedIn: false,
  lastLogin: ["Monday", "Wednesday"],
};

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["lastName"]); // we use this format for situations like this.

jsUser.email = "gaurav@google.com";
// Object.freeze(jsUser);
// jsUser.email = "gaurav@microsoft.com";
console.log(jsUser);


jsUser.greeting = function(){
  console.log("Hello JS user");
};

jsUser.greetingTwo = function(){
  console.log(`Hello JS user , ${this.firstName}`); // this points inside the given object
};

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
