export function multiplicationTable (size: number): number[][] {
    return Array.from({length: size}, (_, i) => Array.from({length:size}, (_, ii) => (ii+1)*(i+1)));
}