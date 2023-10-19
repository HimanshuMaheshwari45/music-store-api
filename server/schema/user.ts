import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});

const UserModel = model("user", UserSchema, "users");

export { UserModel, UserSchema };