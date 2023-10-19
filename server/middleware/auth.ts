import jwt from "jsonwebtoken";
import { APIError } from "../utils/api";
import { UserModel } from "../schema/user";

const SECRET_KEY = process.env.SECRET_KEY;

export async function AuthLogin(req, res, next) {
  const { authorization } = req.headers;

  try {
    const payload = await jwt.verify(authorization, SECRET_KEY);
    req.user = await UserModel.findById(payload.id, { password : 0 });
    next();
  } catch (error) {
    new APIError(res, {}, "user details are not correct").json();
  }
}
