import { useGraphQLModules } from "@envelop/graphql-modules";
import { createApplication } from "graphql-modules";
import { createYoga } from "graphql-yoga";

import { scalarsModule } from "./modules/scalars";

const yoga = createYoga({
  graphqlEndpoint: "/",
  plugins: [useGraphQLModules(createApplication({ modules: [scalarsModule] }))],
});

export const viteNodeApp = yoga;
export default yoga;
