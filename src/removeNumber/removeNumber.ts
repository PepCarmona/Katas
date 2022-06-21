export function removeNumber(n: number): [number, number][] {
    const result: [number, number][] = [];

    const total = Array.from({length: n}, (_, i) => i + 1).reduce((acc, curr) => acc + curr);

    for (let a = 1; a <= n; a++) {
        const b = (total - a) / (a + 1);
        if (b <= n && b % 1 === 0) {
            result.push([a, b]);
        }
    }

    return result;
}

export function removeNumber2(n: number): [number, number][] {
    const result: [number, number][] = [];

    const total = Array.from({length: n}, (_, i) => i + 1).reduce((acc, curr) => acc + curr);

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i === j) {
                continue;
            }
            
            if ((i * j) === (total - i - j)) {
                result.push([i, j]);
            }
        }
    }

    return result;
}