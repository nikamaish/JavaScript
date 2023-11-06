 
 let p1= new Promise((resolve,reject)=>{
    console.log("Promise is pending ")
    setTimeout(()=>{

console.log("I'm a promise and I'm resolved")
resolve(true)

    },3000)
 })




 let p2= new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{

        console.log("I'm a promise and I'm rejected")
reject(new Error("I'm an error")) /// this will show, that it has an error

    },3000)

})


p1.then((abc)=>{
    console.log(abc)
})

p1.then(alert("Yo Yo C'mon"))
p2.catch((error)=>{ ///// by using catch we handled error so it will not show in console
    console.log("Some error occured in p2") 
})

/* resolve and reject are two callbacks provided by js itself,
 resolve(value)= If the job is finished successfully
  reject(error)= If the job fails 
  state= Initially pending them changes to either fulfilled where resolve is called
  or rejected when reject is called

  how we'll understand that it gives value or error
  so for that we can use then and catch
*/

/*
///// another way of catching
 
p2.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})
*/


// console.log(p1,p2)