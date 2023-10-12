import fs from "fs";
import path from "path";

const filepath = "phonebook.json";

const [_node, _bin, cmd, ...params] = process.argv;
const [name, phoneNumber] = params;

switch (cmd) {
    case 'add':
        if (fs.exists(filepath, (data) => {
            const contacts = [{ name, phoneNumber }]
            fs.writeFile(filepath, JSON.stringify(contacts), ()=>{
                console.log("New contact added");
            })
        }))
        break;

    default:
        break;
}
