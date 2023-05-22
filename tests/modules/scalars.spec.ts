import { expect, it } from "vitest";

import { execute } from "../helpers";

it("Returns the current date and time", async () => {
  const result = await execute(/* GraphQL */ `
    query {
      now
    }
  `);

  expect(result.data?.now).toBeTypeOf("number");
});
