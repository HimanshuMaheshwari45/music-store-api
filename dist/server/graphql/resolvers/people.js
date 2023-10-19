"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPeople = void 0;
const people_1 = require("../../schema/people");
require("../../db");
async function GetPeople(context, args) {
    console.log(args);
    return await people_1.PeopleModel.find().sort({ name: args.sort === "ASC" ? 1 : -1 });
}
exports.GetPeople = GetPeople;
