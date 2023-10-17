import express from "express";
import dotenv from "dotenv";
import path from "path";
import http from "http";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

import { ApolloServer } from "@apollo/server";
import { addContact, listContacts } from "../shared/phonebook.js";
import PeopleRoute from "./router/people.js";
import "./db.js";
import { Schema } from "./graphql/types/schema.js";
import Resolvers from "./graphql/resolvers/index.js";

dotenv.config();

const app = express();
const port = 4000;

const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs: Schema,
  resolvers: Resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "server/views"));

app.use(express.json());

await server.start();

app.use("/people", PeopleRoute);

app.get("/list", async (req, res) => {
  const data = await listContacts();
  res.json(data);
});

app.post("/add", async (req, res) => {
  const { name, number } = req.body;
  const data = await addContact(name, number);
  res.json(data);
});

app.use("/graphql", expressMiddleware(server, {}));

httpServer.listen(port);
