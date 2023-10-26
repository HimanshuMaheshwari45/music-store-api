import { Router } from "express";
import * as PeopleController from "../controller/people";
import { addPersonValidator } from "../validator/people";
import * as AuthMiddleware from "../middleware/auth";
import { IsAdminUser } from "../middleware/is-admin";

const PeopleRoute = Router();

// CRUD = CREATE READ UPDATE DELETE

// parent = "/people"
// router = /:id
// ==  /people/:id

PeopleRoute.post(
  "/",
  AuthMiddleware.AuthLogin,
  IsAdminUser,
  addPersonValidator,
  PeopleController.addPerson
);
PeopleRoute.get("/", AuthMiddleware.AuthLogin, PeopleController.getPeople);
PeopleRoute.get("/:id", AuthMiddleware.AuthLogin, PeopleController.getPerson);
PeopleRoute.put(
  "/:id",
  AuthMiddleware.AuthLogin,
  IsAdminUser,
  PeopleController.updatePerson
);
PeopleRoute.delete(
  "/:id",
  AuthMiddleware.AuthLogin,
  IsAdminUser,
  PeopleController.deletePerson
);
PeopleRoute.get(
  "/count/:rating",
  AuthMiddleware.AuthLogin,
  PeopleController.findCountByRating
);

export default PeopleRoute;
