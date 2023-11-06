p1= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Resolved after 2 sec")
            resolve(true)
        },2000) 
})


p1.then((value)=>{
    console.log(value)
    let p2= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("promise 2")
    },2000)
    })
    // console.log(p2)
return p2
})

.then((value)=>{
    console.log("We are done")
    return 2
})

.then((value)=>{
    console.log("Now we are done")
})
/////// it resolves call backhell situation /////// 





/////////////////////////////////// Multiple Handlers /////////////////// 

p1.then(()=>{
    console.log("hurray")
    /*
    basically it is an handler, there is difference between handler and promise chain
     in promise chain we use above value and return it and using that value we exctract next value
     value which is return is now use as promise for next then value 
     the idea is to pass the result through the chain of .then handlers
     code will run simultaneously
     
    */
    })

p1.then(()=>{
    console.log("congratulation!")
})


