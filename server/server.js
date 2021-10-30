const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");

const PORT = 3600;

const typeDefs = require("./schema/index");
const resolvers = require("./resolvers/index");

const app = express();
app.use(cors());

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({
  app,
  path: "/graphql",
});

app.listen(PORT, () => {
  console.log(`Server ready at ${PORT} ${server.graphqlPath}`);
});
