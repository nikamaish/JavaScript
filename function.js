let a=5
let b=6
let c=10

function average(x,y){ // normal function

    return (x+y)/2
}

const sum = (p,q)=>{   ///// new type of function
    return p+q
}

//  helloo = () => {
//     console.log ("Hello World!");
//   }

// helloo();

const hello =()=>{
    console.log("How you doing?")
}

hello()  /// this is way of calling function, when there are no parameters
    

console.log("average is "+average(a,c))
console.log("sum is "+sum(b,c))


//Arrow functions reduce the size of the code. The return statement and function brackets are optional for single-line functions. It increases the readability of the code. Arrow functions provide a lexical this binding.
//It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

const helooo = () => {

    console.log("Gaurav Hagyaa")
}

helooo();