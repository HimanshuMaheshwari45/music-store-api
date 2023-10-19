import { Router } from "express";
import * as PeopleController from "../controller/people";
import { addPersonValidator } from "../validator/people";
import { AuthLogin } from "../middleware/auth";

const PeopleRoute = Router();

// CRUD = CREATE READ UPDATE DELETE

// parent = "/people"
// router = /:id
// ==  /people/:id

PeopleRoute.post("/", addPersonValidator, PeopleController.addPerson);
PeopleRoute.get("/", AuthLogin, PeopleController.getPeople);
PeopleRoute.get("/:id", PeopleController.getPerson);
PeopleRoute.put("/:id", PeopleController.updatePerson);
PeopleRoute.delete("/:id", PeopleController.deletePerson);
PeopleRoute.get("/count/:rating", PeopleController.findCountByRating);

export default PeopleRoute;