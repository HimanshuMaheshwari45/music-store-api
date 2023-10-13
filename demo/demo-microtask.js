console.log("start");

// Macrotask
setTimeout(()=>{
    console.log("timeout")
}, 0)

// Microtask
Promise.resolve()
.then(()=>{
    console.log("promise 1")
})
.then(()=>{
    console.log("promise 2")
})

console.log("end")