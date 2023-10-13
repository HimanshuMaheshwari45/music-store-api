function sum(a, b) {
    return a + b;
}

function sumWithCallback(a, b, callback) {
    const total = a + b;
    callback(total)
}


const total = sum(1, 3);
console.log(total)

sumWithCallback(1, 6, (total) => {
    // total = 7
    sumWithCallback(10, total, (total) => {
        if (total > 20) {
            console.log(total)
        }
        else {
            sumWithCallback(20, total, (total) => {
                if (total > 60) {
                    throw "error occured";
                }
            })
        }
    })

})