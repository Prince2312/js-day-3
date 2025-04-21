function multipleBy5(num){
    return num*5;
}

multipleBy5.power = 2;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function CreateUser(username,score){
    this.username = username;
    this.score = score;
}

CreateUser.prototype.increment = function(){
    this.score++
}
CreateUser.prototype.printMe = function(){
    console.log(`price is: ${this.score}`);
}
const chai = new CreateUser("chai",25);
const tea = new CreateUser("tea",250);

chai.printMe()