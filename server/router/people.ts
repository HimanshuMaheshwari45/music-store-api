import { Router } from "express";
import * as PeopleController from "../controller/people";
import { addPersonValidator } from "../validator/people";
import { AuthLogin } from "../middleware/auth";
import { IsAdminUser } from "../middleware/is-admin";

const PeopleRoute = Router();

// CRUD = CREATE READ UPDATE DELETE

// parent = "/people"
// router = /:id
// ==  /people/:id

PeopleRoute.post(
  "/",
  AuthLogin,
  IsAdminUser,
  addPersonValidator,
  PeopleController.addPerson
);
PeopleRoute.get("/", AuthLogin, PeopleController.getPeople);
PeopleRoute.get("/:id", AuthLogin, PeopleController.getPerson);
PeopleRoute.put("/:id", AuthLogin, IsAdminUser, PeopleController.updatePerson);
PeopleRoute.delete(
  "/:id",
  AuthLogin,
  IsAdminUser,
  PeopleController.deletePerson
);
PeopleRoute.get(
  "/count/:rating",
  AuthLogin,
  PeopleController.findCountByRating
);

export default PeopleRoute;
