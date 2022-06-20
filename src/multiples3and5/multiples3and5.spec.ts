import { multiples3and5 } from "./multiples3and5";

function tester(num: number, expected: number) {
  it("should handle basic tests", () => expect(multiples3and5(num)).toEqual(expected));
}

describe("basic tests", () => {
    tester(10, 23);
    tester(20, 78);
});