/*
https://www.hackerrank.com/challenges/append-and-delete/problem
*/

export const append_and_delete = (s, t, k) => {
  for (var i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) break;
  };
  let z = (s.vclength + t.length) - (i * 2);
  
  if (k >= s.length + t.length) 
    return 'Yes'
  else if (z % 2 === k % 2 && z <= k)
    return 'Yes';
  else
    return 'No';
}
