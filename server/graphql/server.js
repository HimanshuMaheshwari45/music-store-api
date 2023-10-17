import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "@apollo/server";
import { Schema } from "./types/schema.js";
import Resolvers from "./resolvers/index.js";

const server = new ApolloServer({
  typeDefs: Schema,
  resolvers: Resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 5000 },
});
