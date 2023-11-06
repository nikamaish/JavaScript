/////// Promise is promise of code execution

// let promise= new Promise(function(resolve,reject){
//     alert("I am alert in promise")
//     resolve(56)
// //// two possiblities that it can be resolve or can be reject
// })
 

// let q= new Promise(function(resolve,reject){
//     alert("yes")
//     resolve(10)
// })

// console.log(q)

// let z= new Promise(function(resolve,reject){

// })


// console.log("Hello")
// setTimeout(function(){
//     console.log("Hello two in 2 seconds")
// },2000)
// ///// 2000 ms means 2 sec 

// console.log("My name is"+" Hello Three")
// console.log(promise)

// promise has two properties state and result and we can not seperately call it



let p= new Promise((resolve,reject)=>{   ////syntax
console.log("Promise is pending")
//// here we dont resolve so it will be in pending state

setTimeout(()=>{
    console.log("I am a promise and I am fulfilled")
    resolve(true)
},5000)
})

console.log(p)


////// If we have 50 promises then it will be fired at the same time so if we see that setTimeout 


///// there are two states of promise resolve and fail so for resolve we use then and for 

// The then( ) method is called after the Promise is resolved. Then we can decide what to do with the resolved Promise.

// For example, let’s log the message to the console that we got from the Promise:

// myPromise.then((message) => {  
//     console.log(message);
// });



// So if the promise gets rejected, 
// it will jump to the catch( ) method and this time we will see a different message on the console.


// myPromise.then((message) => { 
//     console.log(message);
// }).catch((message) => { 
//     console.log(message);
// });