import fs from "fs/promises";
import path from "path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers"

const filepath = "phonebook.json";

async function addContact(name, phoneNumber) {

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

const argv = yargs(hideBin(process.argv))
    .command('add', "Add new contact", {
        name: {
            description: "Contact Name",
            alias: "n",
            type: "string",
            demandOption: true
        },
        number: {
            description: "Contact Number",
            alias: "m",
            type: "string",
            demandOption: true
        }
    })
    .command('list', "List all contacts")
    .help()
    .alias('help', 'h')
    .argv;

async function run() {
    if (argv._.includes('add')) {
        await addContact(argv.name, argv.number)
    } else if (argv._.includes('list')) {
        await listContacts();
    } else {
        console.log("Invalid command")
    }
}

run();


// switch (cmd) {
//     case "add":
//         addContact()
//         break;

//     case "list":
//         listContacts();
//         break;

//     default:
//         break;
// }

// cli add abc 232424

// cli add --name abc --email abc@abc.com --number 489024982423