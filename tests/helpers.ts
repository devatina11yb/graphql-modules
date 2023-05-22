import type { ExecutionResult } from "graphql";

import yoga from "../src";

export const execute = async (operation: string) => {
  const url = "http://yoga";

  const response = await yoga.fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: operation,
    }),
  });

  return response.json() as Promise<ExecutionResult>;
};
