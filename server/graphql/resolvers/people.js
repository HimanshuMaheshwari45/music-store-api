import { PeopleModel } from "../../schema/people.js";
import "../../db.js";

export async function GetPeople() {
  return await PeopleModel.find();
}
