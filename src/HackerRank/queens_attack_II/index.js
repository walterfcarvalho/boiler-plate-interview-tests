/*
  https://www.hackerrank.com/challenges/queens-attack-2/problem
*/


export function queensAttack(n, k, r_q, c_q, obstacles) {
  let res = 0;
  let i
  let r;
  let c;

  let obs = new Set();
  obstacles.forEach( v => obs.add( v[0] + ':' + v[1] ));

  // vertical
  for (i = r_q + 1; i <= n; i++) {
    if (!obs.has( i +':' + c_q  )) {
//    if (obstacles.find(p => p[0] == i && p[1] == c_q) == undefined) {
      res++
    } else {
      break
    }
  }
  for (i = r_q - 1; i >= 1; i--) {
    if (!obs.has( i +':' + c_q  )) {
    // if (obstacles.find(p => p[0] == i && p[1] == c_q) == undefined) {
      res++
    } else {
      break
    }
  }
  for (i = c_q + 1; i <= n; i++) {
    if (!obs.has( r_q +':' + i  )) {
    //if (obstacles.find(p => p[0] == r_q && p[1] == i) == undefined) {
      res++
    } else {
      break
    }
  }

  for (i = c_q - 1; i >= 1; i--) {
    if (!obs.has( r_q +':' + i  )) {
    //if (obstacles.find(p => p[0] == r_q && p[1] == i) == undefined) {
      res++
    } else {
      break
    } 
  }

  c = c_q + 1;
  r = r_q + 1;
  while (c <= n && r <= n) {
    if (!obs.has( r +':' + c  )) {
    //if (obstacles.find(p => p[0] == r && p[1] == c) == undefined){
      res++
    } else {
      break
    } 
    c++;
    r++;
  }

  c = c_q + 1;
  r = r_q - 1;
  while (c <= n && r >= 1) {
    if (!obs.has( r +':' + c  )) {
    // if (obstacles.find(p => p[0] == r && p[1] == c) == undefined){
      res++
    } else {
      break
    } 
    c++;
    r--;
  }

  c = c_q - 1;
  r = r_q + 1;
  while (c >= 1 && r <= n) {
    if (!obs.has( r + ':' + c  )) {
    // if (obstacles.find(p => p[0] == r && p[1] == c) == undefined){
      res++
    } else {
      break
    } 
    c--;
    r++;
  }

  c = c_q - 1;
  r = r_q - 1;
  while (c >= 1 && r >= 1) {
    if (!obs.has( r +':' + c  )) {
    //if (obstacles.find(p => p[0] == r && p[1] == c) == undefined) {
      res++
    } else {
      break
    } 
    c--;
    r--;
  }

  return res;
}
