/**  jumping_on_the_clouds/test
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_r=next-challenge&h_v=zen
*/

export function jumpingOnClouds(c) {

  let jumps = 0;
  let i = 0;
  
  while ( i < c.length-1) {

    i += c[i+2] == 1 ? 1 : 2;
    jumps ++ ;
  }

  return jumps;
}
