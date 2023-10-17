import { Router } from "express";
import * as PeopleController from "../controller/people.js";

const PeopleRoute = Router();

// CRUD = CREATE READ UPDATE DELETE

// parent = "/people"
// router = /:id
// ==  /people/:id

PeopleRoute.post("/", PeopleController.addPerson);
PeopleRoute.get("/", PeopleController.getPeople);
PeopleRoute.get("/:id", PeopleController.getPerson);
PeopleRoute.put("/:id", PeopleController.updatePerson);
PeopleRoute.delete("/:id", PeopleController.deletePerson);

export default PeopleRoute;
