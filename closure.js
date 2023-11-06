/* 
A closure is feature of js that allows inner functions to access the outer scope of function
A functions scopes ability to access variables from the parent scope is lexical scope 
*/




function foo() {
    let b = 1;
    function inner() {
        return b;
    }
    return inner;
}
let get_func_inner = foo();


// lexical scoping means function scope's ability to access variables from the parent scope 
//we can access the variable b which is defined in the function fOO() through function inner()