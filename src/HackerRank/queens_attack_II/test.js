import {queensAttack} from '.';

describe('Queen\'s Attack II', () => {

  test('Case n=4, k=0, r_q=4, c_q=4, obstacles=[] return 9 ', () => {
    expect( queensAttack(4,0,4,4,[]) ).toBe(9);
  })

  test('Case n=5, , k=0, r_q=4, c_q=3, obstacles=[ [5,5], [4,2], 2,3] return 10 ', () => {
    expect( queensAttack(5,0,4,3,[[5,5], [4,2], [2,3]]) ).toBe(10);
  })
  
})
