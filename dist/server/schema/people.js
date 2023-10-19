"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeopleSchema = exports.PeopleModel = void 0;
const mongoose_1 = require("mongoose");
const PeopleSchema = new mongoose_1.Schema({
    id: Number,
    name: { type: String },
    username: String,
    email: { type: String },
    address: {
        street: String,
        suite: String,
        city: String,
        zipcode: String,
        geo: {
            lat: String,
            lng: String,
        },
    },
    phone: String,
    website: {
        type: String,
    },
    company: {
        name: String,
        catchPhrase: String,
        bs: String,
    },
    rating: Number
});
exports.PeopleSchema = PeopleSchema;
const PeopleModel = (0, mongoose_1.model)("people", PeopleSchema, "people");
exports.PeopleModel = PeopleModel;
