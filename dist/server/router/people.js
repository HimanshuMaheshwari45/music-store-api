"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PeopleController = __importStar(require("../controller/people"));
const people_1 = require("../validator/people");
const AuthMiddleware = __importStar(require("../middleware/auth"));
const is_admin_1 = require("../middleware/is-admin");
const PeopleRoute = (0, express_1.Router)();
// CRUD = CREATE READ UPDATE DELETE
// parent = "/people"
// router = /:id
// ==  /people/:id
PeopleRoute.post("/", AuthMiddleware.AuthLogin, is_admin_1.IsAdminUser, people_1.addPersonValidator, PeopleController.addPerson);
PeopleRoute.get("/", AuthMiddleware.AuthLogin, PeopleController.getPeople);
PeopleRoute.get("/:id", AuthMiddleware.AuthLogin, PeopleController.getPerson);
PeopleRoute.put("/:id", AuthMiddleware.AuthLogin, is_admin_1.IsAdminUser, PeopleController.updatePerson);
PeopleRoute.delete("/:id", AuthMiddleware.AuthLogin, is_admin_1.IsAdminUser, PeopleController.deletePerson);
PeopleRoute.get("/count/:rating", AuthMiddleware.AuthLogin, PeopleController.findCountByRating);
exports.default = PeopleRoute;
