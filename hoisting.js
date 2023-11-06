/* In JavaScript, Hoisting means whatever declarations are there it appears at the  top of codes  
js only hoists declarations, not initializations, vaiable will be undefined until the line where its
initialized is reached
js hoist function definitions, class variables, class definitions on the top



In js hoisting allows you to to use the fucntions or variables before they are declared

*/

// console.log(a)
// greet()
// function greet(){
//     console.log("Go to hell")
// }

// var a
// console.log(a)

console.log(c)
var c='z'


/* let a, const a
 at the top we use a before initializing it so will give error
function experssions, class expressions also are not hoisted
for eg. 

let greet= function(){
    console.log("ok")
this will give error
}
 */




var great;  //// Declaration
let chess;  //// Declaration

great= 'foo'; //// assignment
chess= 'chess'; /// assignment


//// both at the same time declaration, assignment 

    var grow= 'foo'
    let loot='chess'

    let foo = 'foo';
    console.log(typeof foo); // Uncaught ReferenceError: Cannot access 'foo' before initialization



// console.log(foo); // undefined
// var foo = 'bar';
// console.log(foo); // "bar"



//// Function hoisting is useful because we can hide function implementation farther down in the file and let the reader focus on what the code is doing. 
//// In other words, we can open up a file and see what the code does without first understanding how it's implemented.


resetScore();
drawGameBoard();
populateGameBoard();
startGame();

function resetScore() {
	console.log("Resetting score");
}

function drawGameBoard() {
	console.log("Drawing board");
}

function populateGameBoard() {
	console.log("Populating board");
}

function startGame() {
	console.log("Starting game");
}



// get(); // Uncaught TypeError: foo is not a function
// var get = function () { }

// bar(); // Uncaught ReferenceError: Cannot access 'bar' before initialization
// let bar = function () { }

// baz(); // Uncaught ReferenceError: Cannot access 'baz' before initialization
// const baz = function () { }



//// Using an undeclared variable before its assignment will also throw a ReferenceError
//// because no declaration was hoisted:

////Variables declared with let and const are hoisted but not initialized with a default value. 
////Accessing a let or const variable before it's declared will result in a ReferenceError:


