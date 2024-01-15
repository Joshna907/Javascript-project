// singelton object we get from constructor not from literals
//Object.create

                                                     // object literals

const mySym = Symbol("key1")  // Symbol should be defined first like this - 1

const JsUser = {
    name: "Hitesh",           // Format of objects , keys : values
    "full name": "Hitesh Choudhary",
   [mySym]: "mykey1",// the type will be string without brackets // Then, symbol should be added like a key and a value, the brackets are the syntax
    age: 18,                  
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)  // This is the format of accessing the key using dot operator (.)
// console.log(JsUser["email"])  // This is the second format of accessing using square brackets, and inverted commas
// console.log(JsUser["full name"]) // here toh you will have to use the second format you cant use first one a
// console.log(JsUser[mySym])  //The way to access symbol

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)    // when you freeze this
JsUser.email = "hitesh@microsoft.com"// this will not be executed as we freezed the JsUser
// console.log(JsUser);


JsUser.greeting = function(){
    console.log(`Hello JS user, ${this.name} `);
}
JsUser.greetingTwo = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());