/*
https://www.hackerrank.com/challenges/find-digits/problem?h_r=next-challenge&h_v=zen
*/

export const find_digits = (number) => {
  let res = 0;
  "".concat(number).split("").forEach( d => res += (number % d == 0) ? 1: 0);

  return res;
}