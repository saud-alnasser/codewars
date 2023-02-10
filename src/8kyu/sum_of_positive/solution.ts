// https://www.codewars.com/kata/5715eaedb436cf5606000381

export function positiveSum(arr: number[]): number {
  return arr.reduce(
    (prev, current) => (current >= 0 ? prev + current : prev),
    0
  );
}
