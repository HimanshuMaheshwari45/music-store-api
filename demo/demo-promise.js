


function sum(a, b) {
    return new Promise((resolve, reject) => {
        if (a < 0 || b < 0) {
            reject("a or b has to more then 0");
        }
        resolve(a + b);
    })
}


sum(1, 4)
    .then((result) => {
        return sum(4, result)
    })
    .then((result) => {
        return sum(7, result)
    })
    .then((result) => {
        return sum(3, result)
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(()=>{
        console.log("finally")
    })
