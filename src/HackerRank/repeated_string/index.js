/**
 * https://www.hackerrank.com/challenges/repeated-string/problem
 */

export const repeatedString = (s, n) => {
  let qtInStr = 0;
  let strRepats = Math.floor(n / s.length);
  let xtraChars = (n % s.length);
  let res = 0;

  for ( let i =0; i<s.length;i++) {
    qtInStr += s[i] == 'a'? 1 :0;
  }

  res = qtInStr * strRepats;

  for ( let i = 0; i< xtraChars; i++) {
    if (s[i] == 'a') res ++;
  }
  return res;
}