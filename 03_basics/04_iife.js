// Immediately Invoked Function Expressions (IIFE)

(function chai (){
    //named iife
    console.log(`DB CONNECTED`);
})();

//Arrow function

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('prince');
