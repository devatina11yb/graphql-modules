import { GraphQLScalarType, Kind } from "graphql";

export const resolvers = {
  Query: {
    now: () => new Date(),
  },

  DateTime: new GraphQLScalarType({
    name: "DateTime",
    description: "DateTime scalar type",

    parseLiteral: (ast) => {
      if (ast.kind !== Kind.INT) {
        // throw error
      }

      return new Date(parseInt(ast.value, 10));
    },

    parseValue: (value) => {
      if (typeof value !== "number") {
        // throw error
      }

      return new Date(value);
    },

    serialize: (value) => {
      if (!(value instanceof Date)) {
        // throw error
      }

      return value.getTime();
    },
  }),
};
