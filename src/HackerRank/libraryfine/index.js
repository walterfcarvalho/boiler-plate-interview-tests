/*
  https://www.hackerrank.com/challenges/library-fine/problem?isFullScreen=true
*/

export function libraryFine(d1, m1, y1, d2, m2, y2) {
  let res = 0;

  if (y1 < y2) {
    res = 0;
  } else if (y1 == y2) {
    if (m1 < m2) {
      res = 0;
    } else if (m1 == m2) {
      if (d1 > d2) {
        res = 15 * (d1 - d2)
      }
    } else {
      res = 500 * (m1 - m2)
    }
  } else {
    res = 10000;
  }
  return res;
}
