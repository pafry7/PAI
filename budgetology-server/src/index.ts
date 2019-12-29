import "reflect-metadata";

import { ApolloServer } from "apollo-server-koa";
import BodyParser from "koa-bodyparser";
import { HelloWorldResolver } from "./resolvers/HelloWorldResolver";
import Koa from "koa";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";

(async () => {
  const app = new Koa();
  app.use(BodyParser());

  await createConnection();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloWorldResolver],
      validate: true,
      emitSchemaFile: true
    }),
    context: ({ req, res }) => ({ req, res })
  });

  apolloServer.applyMiddleware({ app, cors: false });
  const port = 4000;
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}/graphql`);
  });
})();
