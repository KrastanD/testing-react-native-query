import { render } from "@testing-library/react-native";
import { Component } from "../Component";

describe("query component", () => {
  test("successful component", async () => {
    const result = render(<Component />);

    expect(await result.findByText(/Hello/i)).not.toBeFalsy();
  });

  test("successful component", async () => {
    const result = render(<Component />);

    expect(await result.queryByText(/an error has occurred/i)).toBeFalsy();
  });
});
