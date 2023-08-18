export const extraLongFactorials = (n) => {
  
  // return n == 1 ? 1 : BigInt(n) * BigInt(extraLongFactorials(n-1));

  let res = BigInt(1);
  n = BigInt(n);

  while (n>1) {
    res *= n;
    n--;
  }

  return res;

}
