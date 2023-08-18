import {nonDivisibleSubset} from '.';


describe('nonDivisibleSubset', () => {

  test('Case s = [1, 7, 2, 4], k=3, return 3', () => {
    let s = [1, 7, 2, 4];
    let k = 3;
    expect( nonDivisibleSubset(k,s)).toBe(3);
  })
  
  test('Case s = [278, ... ,436], k=7, return 11', () => {
    let s = [278,576,496,727,410,124,338,149,209,702,282,718,771,575,436];
    let k = 7;
    expect( nonDivisibleSubset(k,s)).toBe(11);
  })


})
