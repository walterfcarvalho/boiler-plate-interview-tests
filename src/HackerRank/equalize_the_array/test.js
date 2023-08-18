import {equalizeArray} from '.';

describe('Equalize the Array', () => {

  test('Teste [1,2,2,3] return 2', () => {
    expect( equalizeArray([1,2,2,3]) ).toBe(2);
  })

  test('Teste [3,3,2,1,3] return 2', () => {
    expect( equalizeArray([3,3,2,1,3]) ).toBe(2);
  })
  
})
