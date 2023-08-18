/*
  https://www.hackerrank.com/challenges/sherlock-and-squares/problem
*/


export const squares = (a,b) => {
  let fSqr = 0;
  let lSqr = 0;
  let sqr;

  for ( let i = a; i<=b; i++) {
    sqr = Math.sqrt(i);
    if (sqr == Math.trunc(sqr)) {
      fSqr = sqr;
      break;
    }
  }
  
  for ( let i = b; i>=a; i--) {
    sqr = Math.sqrt(i);
    if (sqr == Math.trunc(sqr)) {
      lSqr = sqr;
      break;
    }
  }
  
  if (lSqr == 0) {
    return 0
  } else {
    return lSqr - fSqr + 1;
  }
}
