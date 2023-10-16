import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

import { PeopleModel } from "../schema/people.js";
import { APIError, APIResponse } from "../utils/api.js";

const { API_BASE_URL } = process.env;

export async function getPeople(req, res) {
  try {
    const people = await PeopleModel.find();
    new APIResponse(res, people, "This is the data for all users").json();
  } catch (error) {}
}

export async function getPerson(req, res) {
  const { params } = req;
  const { id } = params;

  try {
    const people = await PeopleModel.findById(id);
    new APIResponse(res, people, "This is the data for all users").json();
  } catch (error) {}
}

export async function addPerson(req, res) {
  try {
    const { body } = req;
    const newPerson = new PeopleModel(body);
    await newPerson.save();
    res.json(new APIResponse(null, "User added successfully"));
  } catch {
    res.json(new APIError(null, "Error adding user data"));
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
