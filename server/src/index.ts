import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";

// Since we're using ES Modules, .js extension needs to be added to imports
import { Resolvers } from "./generated/graphql.js";
import { queries } from "./queries.js";

const typeDefs = readFileSync("../schema/schema.graphql", { encoding: "utf-8" });

// Resolvers define how to fetch the types defined in your schema.
const resolvers: Resolvers = {
  Query: queries,
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
