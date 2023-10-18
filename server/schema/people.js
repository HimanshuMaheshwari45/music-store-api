import { Schema, model } from "mongoose";

const PeopleSchema = new Schema({
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
  rating : Number
});

const PeopleModel = model("people", PeopleSchema, "people");

export { PeopleModel, PeopleSchema };
