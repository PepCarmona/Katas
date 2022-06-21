import { removeNumber } from "./removeNumber";

function tester(n: number, expected: number[][]) {
    it (`removeNumber(${n}) = ${expected}`, () => expect(removeNumber(n)).toEqual(expected));
  }
  describe("Fixed Tests removeNumber", function() {
    tester(26, [[15,21],[21,15]]);
    tester(101,  [[55,91],[91,55]]);
    tester(102,  [[70,73],[73,70]]);
    tester(110,  [[70,85],[85,70]]);
  });