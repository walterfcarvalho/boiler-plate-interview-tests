/**
 * https://www.hackerrank.com/challenges/acm-icpc-team/problem?h_r=next-challenge&h_v=zen
 */

export function acmTeam(topic) {
  let max = 0;
  let occurs = [];

  for (let i=0; i < topic.length-1; i++) {
    
    for ( let j = i+1; j<= topic.length -1; j++ ){

      let qt = 0;
      for ( let k=0; k<= topic[0].length; k++ ) {
        qt += (topic[i][k] =='1' || topic[j][k]=='1' ) 
      }

      occurs.push(qt);
      if (qt > max) max = qt
    }
  }

  return [
    max,
    occurs.filter( i => i == max ).length
  ]
}
