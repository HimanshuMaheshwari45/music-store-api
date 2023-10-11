import fs from "fs";

fs.writeFile("example.txt", "hello world!!!", (err) => {
    if (err) throw err;
    console.log("Example file created.");

    fs.readFile("example.txt", 'utf-8', (err, data) => {
        if (err) throw err;
        console.log("File contents:");
        console.log(data);
    })

})

// if no error in code then err value will be null
// method((err, data)=>{

// })