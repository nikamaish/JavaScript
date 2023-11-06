/*
In JS, this is refer to particular obejct and it access property of that object which function is now being
see the below examples
*/

///////////////////////////////////// This keyword Inside of Method //////////////////////////////////


console.log('aish')
let counter=createCounter(); // here obj is created
let counter1=createCounter(); // here another obj is created


function createCounter(){
    return{
        count: 0, //this is a property and in oops of js, we write as property:value, instead of property=value
        increment () { // it is a function
            this.count++;  // this refers to that object, who calls the this method, and access that object's property
        }
    }
}
counter1.increment(); //1 output
counter1.increment();// 2 output
counter.increment(); // 1 output


// In above example we see that we can create lots of obejct, so for different different obejcts we have to create new function so instead of that we can use this keyword so it refers to that current obejct


//////////////////////////////////// function ////////////////////////////////

// In this example, count is called outside of functions it means it is called globally, we did not create object
// still this example will give output, bcz When used alone, this refers to the global object i.e window obejct
// In a function, the global object is the default binding for this.
// In a browser window the global object is [object Window]:

var count1=0;
function incrementCounter(){
    this.count1++;   
    console.log(this);
}


incrementCounter();
console.log(count1);



/////////////////////////////////// Globally alone //////////////////////////////

// When used alone, this refers to the global object.In a browser window the global object is [object Window]:
let x = this;



//////////////// this in event handlers //////////////////////////

//In HTML event handlers, this refers to the HTML element that received the event
{/* <button onclick="this.style.display='none'">
  Click to Remove Me!
</button> */}


//////////////////////// this in constructors ///////////////////////////

function car(name) { // this is constructor function
        this.name=name; //this.name = name; assigns the name parameter to the name property of the instance being created.
        this.start=function () { // start is method
            console.log(this.name+' started')
        }
}

let swift = new car('Swift'); // here new instance of obj is created and Swift name is passed as parameter
swift.start(); // method is called



//// this.name means name is property of object and for every object name will be the which will be given in constructor
// here we Write as Swift so name of car will be Swift bcz in constructor we pass this value and by using this keyword
/// it goes to the name property of car object.