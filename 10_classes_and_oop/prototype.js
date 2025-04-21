// let myName = "prince";
// let mychannel = "Princefitvlog";
// console.log(myName.trueLength);

let myHeros = ["Thor","Spiderman"];

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`);
    }
}

Object.prototype.prince = function(){
    console.log(`prince is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.prince()

// myHeros.prince();
// myHeros.heyHitesh();
// heroPower.heyHitesh();

//inheritance

const User={
    name: "chai",
    email:"chai@gmail.com",
}

const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable:false,
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__= User

// Modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "chaiorcode";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}

anotherUsername.trueLength()