import express from "express";
import dotenv from "dotenv";
import path from "path";
import { addContact, listContacts } from "../shared/phonebook.js";
import PeopleRoute from "./router/people.js"
import "./db.js";

dotenv.config();

const app = express();
const port = 4000;

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "server/views"));

app.use(express.json());

app.use("/people", PeopleRoute);

app.get("/list", async (req, res) => {
  const data = await listContacts();
  res.json(data);
});

app.post("/add", async (req, res) => {
  const { name, number } = req.body;
  const data = await addContact(name, number);
  res.json(data);
});



app.listen(port, () => {
  console.log(`Application server started at: http://localhost:${port}`);
});
