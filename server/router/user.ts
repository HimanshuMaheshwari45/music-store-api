import { Router } from "express";
import * as UserController from "../controller/user";

const UserRoute = Router();

UserRoute.post("/login", UserController.login);
UserRoute.post("/register", UserController.register);

export default UserRoute;
