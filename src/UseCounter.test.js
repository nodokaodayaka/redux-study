import { renderHook, act } from "@testing-library/react-hooks";
import useCounter from "./UseCounter";

describe("useCounter", () => {
    test("should increment counter by increment", () => {
        const { result } = renderHook(() => useCounter());

        act(() => {
            result.current.increment();
        });

        expect(result.current.counter).toBe(1);
    });

    test("should decrement counter by decrement", () => {
        const { result } = renderHook(() => useCounter());

        act(() => {
            result.current.decrement();
        });

        expect(result.current.counter).toBe(-1);
    });
});
