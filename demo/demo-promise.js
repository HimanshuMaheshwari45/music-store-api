


function sum(a, b) {
    return new Promise((resolve, reject) => {
        if (a < 0 || b < 0) {
            reject("a or b has to more then 0");
        }
        resolve(a + b);
    })
}

// Success = Resolve, Fulfilled
// Error = Rejected, Catch
// Settled = Finally


sum(1, 4)
    .then((result) => {
        return sum(4, result)
    })
    .then((result) => {
        return sum(7, result).then(() => { }).catch(() => { })
    })
    .then((result) => {
        return sum(3, result).catch(() => { })
    })
    .then((result) => {
        console.log(result).catch(() => { })
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("finally")
    })

async function calculateWorkingDaySalary(a, b) {
    try {
        return await sum(a, b)
    } catch (error) {
        console.log("error in calculateWorkingDaySalary")
    }
}

async function calculateSalary() {
    try {
        const workingDayTotal = await calculateWorkingDaySalary(1, 4);
        const bonusTotal = await sum(workingDayTotal, 10).catch()
        const pensionTotal = await sum(bonusTotal, -5);
        const nightShiftBonus = await sum(pensionTotal, 6);
    } catch (error) {
        console.log("Error in total")
    }
    console.log(nightShiftBonus);
}

async function demo(){
    console.log("demo 1")
}


console.log(1);
demo().then(()=>{
    console.log("demo 2");
})
console.log(2);






function timeoutPromise(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    })
}

timeoutPromise(100).then(() => {
    console.log("Timeout Promise");
})