import { Schema, model } from "mongoose";

const PeopleSchema = new Schema({
  id: Number,
  name: String,
  username: String,
  email: String,
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
  website: String,
  company: {
    name: String,
    catchPhrase: String,
    bs: String,
  },
});

const PeopleModel = model("people", PeopleSchema, "people");

export { PeopleModel, PeopleSchema };
