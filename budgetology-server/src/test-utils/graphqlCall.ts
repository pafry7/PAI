import { GraphQLSchema, graphql } from "graphql";
import { Maybe, buildSchema } from "type-graphql";

import { resolvers } from "resolvers";

interface Options {
  source: string;
  variableValues?: Maybe<{
    [key: string]: any;
  }>;
  userId?: string;
}

let schema: GraphQLSchema;

export const graphqlCall = async ({
  source,
  variableValues,
  userId
}: Options) => {
  if (!schema) {
    schema = await buildSchema({
      resolvers: resolvers,
      validate: true,
      emitSchemaFile: true
    });
  }
  return graphql({
    schema,
    source,
    variableValues,
    contextValue: {
      req: {
        session: {
          userId
        }
      },
      res: {
        clearCookie: jest.fn()
      }
    }
  });
};
