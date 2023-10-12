import express from "express";
import fs from "fs/promises";
import { addContact, listContacts } from "../shared/phonebook.js"

const app = express();
const port = 4000;

app.get("/list", async (req, res) => {
    const data = await listContacts();
    res.json(data);
})

app.listen(port, () => {
    console.log(`Application server started at: http://localhost:${port}`)
})