"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listContacts = exports.addContact = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const filepath = "phonebook.json";
async function addContact(name, phoneNumber) {
    let contacts = [];
    try {
        const filedata = await promises_1.default.readFile(filepath, "utf8");
        contacts = JSON.parse(filedata);
    }
    catch (error) {
        console.log("phonbook file didn't exists.");
    }
    contacts.push({ name, phoneNumber });
    await promises_1.default.writeFile(filepath, JSON.stringify(contacts));
    console.log("New contact added.");
}
exports.addContact = addContact;
async function listContacts() {
    try {
        const filedata = await promises_1.default.readFile(filepath, "utf8");
        const data = JSON.parse(filedata);
        return data;
    }
    catch (error) {
        return null;
    }
}
exports.listContacts = listContacts;
