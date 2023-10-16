import express from "express";
import dotenv from "dotenv";
import ejs from "ejs";
import path from "path";
import * as PeopleController from "./controller/people.js"
import { addContact, listContacts } from "../shared/phonebook.js";

dotenv.config();

const app = express();
const port = 4000;

app.set('view engine', 'ejs');
app.set("views", path.join(process.cwd(), "server/views"))

app.use(express.json());

app.get("/list", async (req, res) => {
    const data = await listContacts();
    res.json(data);
})

app.post("/add", async (req, res) => {
    const { name, number } = req.body;
    const data = await addContact(name, number);
    res.json(data);
});

app.get("/people", PeopleController.getPeople)




app.listen(port, () => {
    console.log(`Application server started at: http://localhost:${port}`)
})