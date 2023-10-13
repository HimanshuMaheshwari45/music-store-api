    console.log(1) // Sync
    console.log(2) // Sync
    console.log(3) // Sync
    console.log(4) // Sync
    console.log(5) // Sync
        
    console.log(7) // Sync
    console.log(8) // Sync
    console.log(9) // Sync
    console.log(10) // Sync
    console.log(11) // Sync
        
    console.log(13) // Sync
    console.log(14) // Sync



    setTimeout(()=>{ console.log(6) }, 1000) // Async API
    setTimeout(()=>{ console.log(12) }, 0) // Async API

// 1 to 14
// 1 to 5 7 to 11 12 6

// 1 to 5 7 to 11 and then 12 and 6