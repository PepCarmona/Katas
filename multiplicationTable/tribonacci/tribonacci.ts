export function tribonacci(signature: [number, number, number], n: number): number[] {
    const result: number[] = [];
    for (let i = 0; i < n; i++) {
        if (i < signature.length) {
            result.push(signature[i]);
        } else {
            result.push(result.slice(-3).reduce((total, number) => total += number));
        }
    }
    return result;
}