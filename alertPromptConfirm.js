alert("Hello your script works!")
// this is for giving commands to user

let a=prompt("Enter value here")
document.write(a) 
console.log(a)


let write= confirm("Do you want to write it to the page")
if(write){
    document.write(a)
}
else{
    document.write("Please allow me to write")
}