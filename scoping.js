
{ 
//// local block scope
    let a=8
    // document.write("Yo "+a)
    // console.log("Yo "+a)
}
// console.log(a)


/* 
local scope, global scope
let and const provide block level scope which means that the variables declared inside a {} can't be accessed
from the outside the block

var is opposite to it
*/  

////// function scope is local scope
function abc(){
    let bc=10
    console.log(bc)
}

abc()
// console.log(a)


