const user ={
    username:"prince",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to wetsite`);
        console.log(this);
    }

}
user.welcomeMessage()
user.username = "Singh";
user.welcomeMessage()

function chai(){
    let username ="prince";
    console.log(this.username);
}
chai()

const chai = function(){
    let username = "prince";
    console.log(this.username);
}

const chai = () =>{
    let username = "prince";
    console.log(this);
}

chai()

// basic arrow function

// const addtwo = (num1,num2) => {
//    return num1+num2
// }

// console.log(addtwo(3,4));

// implicite return arrow function

const addtwo = (num1,num2) => (num1+num2)

console.log(addtwo(3,4))