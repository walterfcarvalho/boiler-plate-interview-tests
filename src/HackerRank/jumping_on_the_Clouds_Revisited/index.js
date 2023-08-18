export const jumping_on_the_Clouds_Revisited = (c, k) => {
  let e = 100;
  let i = 0;
  let res = 0; //92

  while (true) {
    
    i = (i + k);

    if (i > c.length - 1) i -= c.length

    e -= (c[i] == 1) ? 3 : 1;

    if (i == 0) break
  }


  return e;
}