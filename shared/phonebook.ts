import fs from "fs/promises";
const filepath = "phonebook.json";

export async function addContact(name, phoneNumber) {
  let contacts: any[] = [];
  try {
    const filedata = await fs.readFile(filepath, "utf8");
    contacts = JSON.parse(filedata);
  } catch (error) {
    console.log("phonbook file didn't exists.");
  }

  contacts.push({ name, phoneNumber });
  await fs.writeFile(filepath, JSON.stringify(contacts));
  console.log("New contact added.");
}

export async function listContacts() {
  try {
    const filedata = await fs.readFile(filepath, "utf8");
    const data = JSON.parse(filedata);
    return data;
  } catch (error) {
    return null;
  }
}
