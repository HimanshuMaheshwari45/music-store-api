import fs from "fs";

export function DemoHandler2(){
    console.log("2");
}

export function DemoHandler() {
    fs.writeFile("example.txt", "hello world!!!", (err) => {
        if (err) throw err;
        console.log("Example file created.");

        // fs.readFile("example.txt", 'utf-8', (err, data) => {
        //     if (err) throw err;
        //     console.log("File contents:");
        //     console.log(data);
        // })

        fs.appendFile("example.txt", "added new content for demo", 'utf8', (err) => {
            if (err) throw err;

            fs.readFile("example.txt", 'utf-8', (err, data) => {
                if (err) throw err;
                console.log("File contents:");
                console.log(data);

                fs.unlink("example.txt", (err) => {
                    if (err) throw err;
                    console.log("File deleted successfully.")
                })
            })
        })

    })
}





// if no error in code then err value will be null
// method((err, data)=>{

// })