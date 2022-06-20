import { multiplicationTable } from "./multiplicationTable";

function tester(size: number, expected: number[][]) {
    it(
        `can handle ${size}x${size} table`, 
        () => expect(multiplicationTable(size)).toEqual(expected)
    );
}
describe('multiplicationTable', () => {
    tester(1, [[1]]);
    
    tester(2, [[1, 2], [2, 4]]);

    tester(3, [[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
});