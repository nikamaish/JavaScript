
/*
asynchronous actions means those actions which we initiate and that will scomplete in some time for eg  set timeout

A callback function in javascript is a function that is passed as an argument in another function. 
Callbacks ensure that the function will not run before the task is completed but will run right after the task is completed. 
It develops asynchronous JavaScript code and keeps them safe from errors

asynchronous js means that js 
This means that instructions can run simltanoeous  i.e in parallel.

synchronous js
This means that instructions can only run one after another, and not in parallel.
*/


// ////////////////// example of Synchronous programming //////////////////
// let a = prompt("what is your name?");
// let b = prompt("what is your age?");
// let c = prompt("what is your favorite color?");

// document.write(a+" is "+ b+ " years old and has "+ c+" favorite color")



// ////////////////// Asynchronous programming /////////////////////

// console.log("Start")

var h = setTimeout(()=>{   ///es6 arrow function
    console.log("Hey I'm goodie")
},3000)



 var g = setInterval(()=>{   ///es6 arrow function
    console.log("Hey I'm good")
},3000)

clearInterval(g);



/// above func is callback bcz called after cetrain period of time, the callback fucn here has no name and a fucntion wihout name in js is an anonymous func

// console.log("End")
// // ////////////////////////////////Run above code to understand /////////////////////////////


// setTimeout(()=>{
//     console.log("hey")
// },5000)
// console.log("end")





// ///////////////////////// callback function ////////////////////////
// ///////Where callbacks really shine are in asynchronous functions, 
// ///////where one function has to wait for another function (like waiting for a file to load).


// function loadScript(src, callback){
//     var script= document.createElement("script")
//     script.src=src
//     script.onload=function(){
//         console.log("Loaded script with src:"+src)
//         callback()
//     }

//     script.onerror=function(){ // this function will show when there is error
//         console.log("Error loading script with src:"+src)
//     }
//     document.body.appendChild(script)
// }


// function hello(){
//     alert('Hello World!')
// }

// function goodmorning(){
//     alert('Good Morning')
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"+ hello )
// ///so basically in callback function,when we load the loadscript given function will also work along with that url
// /// here hello is callback function
// /// this is called 'callback-based' style of async programming, a function that does something aysnchronous should
// /// provide a callback argument where we put the function to run after its complete   



/////when we have callback inside callbacks it causes callback hell or pyramid of Doom and it's difficult to manage
/////// it can be managed by using promises

  


// A callback function in programming refers to a function that is passed as an argument to another function and is intended to be executed later, often asynchronously or after a certain task is completed. Callbacks are commonly used in scenarios where you want to control the flow of execution

// function greet(name,callback){
//     console.log('Hi'+' '+'name');
//     callback();
// }

// function callme(){
//     console.log('I am callback function');
// }

// greet('peter',callme);




// function mainFunction(callback) {
//     console.log("Performing operation...");
//     // Use setTimeout to simulate an asynchronous operation
//     setTimeout(function() {
//         callback("Operation complete");
//     }, 1000);
//     }
    
//     // Define the callback function
//     function callbackFunction(result) {
//     console.log("Result: " + result);
//     }
    
//     // Call the main function with the callback function
//     mainFunction(callbackFunction);
//     //This code is contributed by Veerendra Singh Rajpoot
    





// function doSomethingAsync(callback) {
//     setTimeout(() => {
//       console.log("Async operation completed");
//       callback(); // Calling the callback function
//     }, 1000);
//   }
  
//   function callbackFunction() {
//     console.log("Callback function executed");
//   }
  
//   doSomethingAsync(callbackFunction);
  


// "Async operation completed" (after approximately 1 second)
// "Callback function executed"
// The key thing to understand is that the callback passed to doSomethingAsync is executed after the asynchronous operation within doSomethingAsync is completed. This is the nature of asynchronous programming, where certain code is scheduled to run later, allowing the rest of the program to continue executing without waiting for the asynchronous operation to finish.