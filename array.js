
let marks=[99,12,45,67,49,false,"Not present"]
console.log(marks)
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])
console.log(marks[6])
console.log(marks[7])  /// wrong index it will show undefined

console.log("The length of marks is "+marks.length)

marks[6]=100
marks[6]=102

console.log(marks)

console.log(typeof marks)

//  arrays are mutable they can be changed, strings are unmutable they can not be changed


for(let i=0;i<=marks.length;i++){
    console.log(marks[i])
}

/////////////////////////////////////// for each in array //////////////////////////////


let xyz=[3,5,1,2,4]

xyz.forEach((zebra)=>
{
    console.log(zebra*zebra)
    })


let name='Aish'
let arr= Array.from(name)
console.log(arr)


///////////// for of array /////////
// The phrase "for of" is a type of loop construct in programming languages that allows you to iterate over the elements of an iterable object, such as an array, a string, a Map, a Set, etc. It simplifies the process of iterating through the elements without needing to keep track of indices 

let abc=[90,80,70]
for(let item of abc){
    console.log(item)
}

//////////// for in  in array /////////

///// so basically for in gives us the keys of array or object for more understanding you can see it in 
// It's typically used for iterating over the keys (property names) of an object, not the values.

let jkl=[50,40,30]
for(let list in jkl){
    console.log(list)
}

