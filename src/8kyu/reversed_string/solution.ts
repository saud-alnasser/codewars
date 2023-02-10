// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

export function solution(str: string): string {
  const reversed = [];

  for (let i = str.length - 1, j = 0; i >= 0; i--, j++) reversed[j] = str[i];

  return reversed.join('');
}
