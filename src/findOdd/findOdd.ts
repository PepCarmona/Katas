export function findOdd(numbers: number[]): number {
    const checkedNumbers: number[] = [];

    return numbers.find((number) => {
        if (checkedNumbers.includes(number)) {
            return false;
        }

        checkedNumbers.push(number);

        const count = numbers.reduce((total, current) => {
            if (current === number) {
                total++;
            }

            return total;
        }, 0);

        return count % 2 === 1;
    }) ?? 0;
}