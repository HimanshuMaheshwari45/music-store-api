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

async function listContacts() {
    try {
        const filedata = await fs.readFile(filepath, 'utf8');
        const data = JSON.parse(filedata);
        data.forEach((contact, index) => {
            console.log(`#${index + 1}. ${contact.name} - ${contact.phoneNumber}`)
        });
    } catch (error) {
        console.log("No Contacts");
    }
}


switch (cmd) {
    case "add":
        addContact()
        break;

    case "list":
        listContacts();
        break;

    default:
        break;
}