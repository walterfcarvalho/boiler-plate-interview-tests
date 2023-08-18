/*
https://www.hackerrank.com/challenges/cut-the-sticks/problem?isFullScreen=true&h_r=next-challenge&h_v=zen
*/

export const cutTheSticks = (arr) => {
  let sortArr = Array.from( new Set( arr.sort( (a,b) => b>a ? -1:0)));
  
  let res = [];

  sortArr.forEach( n => {

    res.push(
      arr.filter( arrItem => arrItem >= n ).length
    )
  })

  return res;

}