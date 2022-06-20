import { findOdd } from "./findOdd";
  
function tester(a: number[], n: number) {
  it(`list = ${JSON.stringify(a)} ; odd = ${n}`, () => expect(findOdd(a)).toEqual(n));
}

describe('Example tests', function() {
    tester([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
    tester([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
    tester([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
    tester([10], 10);
    tester([1,1,1,1,1,1,10,1,1,1,1], 10);
    tester([5,4,3,2,1,5,4,3,2,10,10], 1);
  });