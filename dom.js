/*

The main objective of ReactJS is to develop User Interfaces (UI) that improves the speed of the apps. It uses virtual DOM (JavaScript object), which improves the performance of the app. The JavaScript virtual DOM is faster than the regular DOM. We can use ReactJS on the client and server-side as well as with other frameworks. 
It uses component and data patterns that improve readability and helps to maintain larger apps.

*/

// var a = document.querySelector("h1").innerHTML="okays"; //selecting query and changing html
var a = document.querySelector("h1");
// console.log(a);
a.style.color= "red";


var b= document.querySelectorAll('h2');
// console.log(b);

/// forEach for getting every element of an array
// The e inside the parentheses is a parameter that represents the current element of the array being processed during each iteration.
    b.forEach(function(e){ // e parameters
        console.log(e)
    });

a.addEventListener("click",function () {
    a.innerHTML="badal gaya"
    a.style.color="yellow";
    a.style.backgroundColor="#000";
})

// var c= document.getElementsByClassName('newdiv');

var d= document.querySelector('h3')
d.textContent='Aishwarya'

// a.innerHTML="changed HTML";
// css= style
// event