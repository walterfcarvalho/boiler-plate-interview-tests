import {acmTeam} from '.';

describe('acmTeam', () => {

  test('Case 5, 10101, 11100, 11010, 00101 return [5,2]', () => {
    let arr = ['10101','11100','11010','00101'];

    expect( acmTeam(arr)).toEqual([5,2]);
  })
  
})
