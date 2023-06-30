import { act, renderHook } from "@testing-library/react-native";
import { useState, useCallback } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((x) => x + 1), []);
  return { count, increment };
}

describe("basic Hook", () => {
  it("tests just renderHook", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);
    expect(typeof result.current.increment).toBe("function");
  });

  it("tests renderHook a second time", () => {
    const { result, rerender } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);
    act(() => {
      result.current.increment();
    });
    rerender({});
    expect(result.current.count).toBe(1);
  });
});
