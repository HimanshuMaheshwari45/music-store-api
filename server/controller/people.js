import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

import { PeopleModel } from "../schema/people.js";

const { API_BASE_URL } = process.env;

export async function getPeople(req, res) {
  try {
    const people = await PeopleModel.find();
    res.json(people);
  } catch (error) {}
}

export async function getPerson(req, res) {

    const { params } = req;
    const { id } = params;

    try {
      const people = await PeopleModel.findById(id);
      res.json(people);
    } catch (error) {}
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

export async function deletePerson(req, res) {
  try {
    const { params } = req;
    const { id } = params;

    await PeopleModel.findByIdAndDelete(id);
    res.json({ message: "person data deleted successfully" });
  } catch (error) {
    res.json({ message: "unable to delete record." });
  }
}

export async function updatePerson(req, res) {
  try {
    const { params, body } = req;
    const { id } = params;

    await PeopleModel.findByIdAndUpdate(id, body, { new: true });
    res.json({ message: "person data updated successfully" });
  } catch (error) {
    res.json({ message: "unable to update record." });
  }
}
