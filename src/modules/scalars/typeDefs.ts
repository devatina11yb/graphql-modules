import { gql } from "graphql-modules";

export const typeDefs = gql`
  scalar DateTime

  type Query {
    now: DateTime!
  }
`;
