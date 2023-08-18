/**
 * 
 */

export const equalizeArray = (arr) => {
  let nAtual=0;
  let nQuant=0;
  let nMax=0;
  arr.sort( (a,b) => b > a ?-1 :0 );

  arr.forEach( n => {
    
    if (nAtual !== n) {
      nAtual = n;
      nQuant = 1; 
    } else {
      nQuant ++
    } 
    
    if (nQuant > nMax) {
      nMax = nQuant
    }
  });

  return arr.length - nMax;
}