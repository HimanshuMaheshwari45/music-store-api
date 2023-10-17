import { Schema, model } from "mongoose";

const PeopleSchema = new Schema({
  id: Number,
  name: { type: String, required: true, minlength: 3, maxlength: 64 },
  username: String,
  email: { type: String, required: true },
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
    required: true,
    validate: {
      validator: function (value) {
        return value.includes("example.com") ? false : true;
      },
      message: "website cannot be example.com"
    },
  },
  company: {
    name: String,
    catchPhrase: String,
    bs: String,
  },
});

const PeopleModel = model("people", PeopleSchema, "people");

export { PeopleModel, PeopleSchema };
