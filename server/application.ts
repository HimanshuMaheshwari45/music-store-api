import express from "express";
import dotenv from "dotenv";
import path from "path";
import http from "http";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

import { ApolloServer } from "@apollo/server";
import { addContact, listContacts } from "../shared/phonebook";
import PeopleRoute from "./router/people";
import "./db";
import { Schema } from "./graphql/types/schema";
import Resolvers from "./graphql/resolvers/index";
import { ProductModel } from "./schema/products";
import ProductRoute from "./router/product";
import UserRoute from "./router/user";
import { logging } from "./middleware/logging";

dotenv.config();

async function main() {
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

  app.use(logging);

  app.use("/people", PeopleRoute);
  app.use("/product", ProductRoute);
  app.use("/user", UserRoute);
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
}

main();
