import { UserModel } from "../schema/user";
import { APIError, APIResponse } from "../utils/api";
import Bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY;

interface IUser {
  email: string;
  password: string;
  _id: string;
  name: string;
}

export async function login(req, res) {
  try {
    try {
      const { email, password } = req.body;
      const user = await UserModel.findOne<any>({ email });

      if (user) {
        const { email: _email, password: _password, name: _name, _id } = user;
        const payload = await Bcrypt.compare(password, _password);
        if (payload) {
          const token = await jwt.sign({ id: _id }, SECRET_KEY);
          new APIResponse(res, { accessToken: token }, "User logged in").json();
        } else {
          throw new Error("user credentials are not matching.");
        }
      } else {
        throw new Error("user credentials are not matching.");
      }
    } catch (error: any) {
      new APIError(res, {}, error.message || "Error creating new user.").json();
    }
  } catch (error) {}
}

export async function register(req, res) {
  try {
    const { email, name, password } = req.body;
    const hashpassword = await Bcrypt.hash(password, 10);
    const newUser = new UserModel({ email, name, password: hashpassword });
    const user = await newUser.save();
    new APIResponse(res, {}, "New user created.").json();
  } catch (error) {
    console.log(error);
    new APIError(res, {}, "Error creating new user.").json();
  }
}
