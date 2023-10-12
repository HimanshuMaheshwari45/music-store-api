import fs from "fs/promises";
import path from "path";

const filepath = "phonebook.json";

const [_node, _bin, cmd, ...params] = process.argv;
const [name, phoneNumber] = params;


async function addContact() {

    let contacts = []
    try {
        const filedata = await fs.readFile(filepath, 'utf8')
        contacts = JSON.parse(filedata);
    } catch (error) {
        console.log("phonbook file didn't exists.")
    }

    contacts.push({ name, phoneNumber })
    await fs.writeFile(filepath, JSON.stringify(contacts));

    console.log("New contact added.")

}


switch (cmd) {
    case "add":
        addContact()
        break;

    case "search":

        break;

    default:
        break;
}