// function execution context
// Eval execution context

// {} => memory creation phase

// => execution phase 

let val1 = 10;
let val2 = 5;
function addNum(num1,num2){
    let total = num1+num2;
    return total;
}

let result1 = addNum(val1,val2)
let result2 = addNum(10,2)

// (1) => Global Execution
    // .this
//  (2) Memory Phase
//  val1 -> Undefined
//  val2 -> Undefined
//  addnum -> defined
//  result -> undefined
//  result2 -> undefined


// (3) => Execution Phase
// val1 <- 10
// val2 <- 5  
// addnum -> [new variable, environment        + execution thread      ]      