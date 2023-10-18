import { PeopleModel } from "../../schema/people";
import "../../db";

export async function GetPeople(context, args) {
  console.log(args);
  return await PeopleModel.find().sort({ name: args.sort === "ASC" ? 1 : -1 });
}
