import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

import { PeopleModel } from "../schema/people.js";

const { API_BASE_URL } = process.env;

export async function getPeople(req, res) {
  try {
    const people = await PeopleModel.find();
    res.json(people);
  } catch (error) {
   
  }
}

export async function addPerson(req, res) {
  try {
    const { body } = req;
    const newPerson = new PeopleModel(body);
    await newPerson.save();
    res.json({ message: "new user added." });
  } catch {
    res.json({ message: "unable to save user." });
  }
}
