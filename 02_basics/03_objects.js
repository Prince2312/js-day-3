// singleton

// ojects literals

const mysym = Symbol("key1");

const jsUser ={
    name:"Prince",
    [mysym]: "mykey1",
    age: 18,
    location:"raebareli",
    email: "prince@gmail.com",
    isloggedIn: false
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mysym]);

jsUser.email ="prince8756@gmail.com";
// Object.freeze(jsUser);
// console.log(jsUser["email"]);
// console.log(jsUser);

jsUser.greetings = function(){
    console.log("hello ji");
}

jsUser.greetingstwo = function(){
    console.log(`"hejjo ji ", ${this.name}`);
}

console.log(jsUser.greetings()); 
console.log(jsUser.greetingstwo());