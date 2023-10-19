"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCountByRating = exports.updatePerson = exports.deletePerson = exports.addPerson = exports.getPerson = exports.getPeople = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const people_1 = require("../schema/people");
const api_1 = require("../utils/api");
const express_validator_1 = require("express-validator");
const { API_BASE_URL } = process.env;
async function getPeople(req, res) {
    try {
        const people = await people_1.PeopleModel.find();
        new api_1.APIResponse(res, people, "This is the data for all users").json();
    }
    catch (error) { }
}
exports.getPeople = getPeople;
async function getPerson(req, res) {
    const { params } = req;
    const { id } = params;
    try {
        const people = await people_1.PeopleModel.findById(id);
        new api_1.APIResponse(res, people, "This is the data for all users").json();
    }
    catch (error) { }
}
exports.getPerson = getPerson;
async function addPerson(req, res) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        new api_1.APIError(res, errors.array(), "Error saving new user").json();
    }
    try {
        const { body } = req;
        const newPerson = new people_1.PeopleModel(body);
        await newPerson.save();
        new api_1.APIResponse(res, null, "User added successfully").json();
    }
    catch (error) {
        new api_1.APIError(res, error.message, "Error adding user data").json();
    }
}
exports.addPerson = addPerson;
async function deletePerson(req, res) {
    try {
        const { params } = req;
        const { id } = params;
        await people_1.PeopleModel.findByIdAndDelete(id);
        res.json({ message: "person data deleted successfully" });
    }
    catch (error) {
        res.json({ message: "unable to delete record." });
    }
}
exports.deletePerson = deletePerson;
async function updatePerson(req, res) {
    try {
        const { params, body } = req;
        const { id } = params;
        await people_1.PeopleModel.findByIdAndUpdate(id, body, { new: true });
        res.json({ message: "person data updated successfully" });
    }
    catch (error) {
        res.json({ message: "unable to update record." });
    }
}
exports.updatePerson = updatePerson;
async function findCountByRating(req, res) {
    try {
        const { params, body } = req;
        const { rating } = params;
        console.log(rating);
        const result = await people_1.PeopleModel.find({ rating: { $lte: rating } }).count();
        new api_1.APIResponse(res, { count: result }, "Count of people based on rating").json();
    }
    catch (error) {
        res.json({ message: "unable to update record." });
    }
}
exports.findCountByRating = findCountByRating;
