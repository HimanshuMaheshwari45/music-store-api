import { PeopleModel } from "../../schema/people.js";
import "../../db.js";

export async function GetPeople(context, args) {
  console.log(args);
  return await PeopleModel.find().sort({ name: args.sort === "ASC" ? 1 : -1 });
}
