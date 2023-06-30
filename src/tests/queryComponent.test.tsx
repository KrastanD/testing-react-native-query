import { rest } from "msw";

import { server } from "../setupTests";
import { Example } from "../Example";
import { renderWithClient } from "./utils";

describe("query component", () => {
  test("successful query component", async () => {
    const result = renderWithClient(<Example />);

    expect(await result.findByText(/mocked-react-query/i)).not.toBeFalsy();
  });

  test("failure query component", async () => {
    server.use(
      rest.get("*", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const result = renderWithClient(<Example />);

    expect(await result.findByText(/an error has occurred/i)).not.toBeFalsy();
  });
});
