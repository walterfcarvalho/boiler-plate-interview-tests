import {jumpingOnClouds} from '.';

describe('jumpingOnClouds', () => {

  test('Case c = [0,1,0,0,0,1,0] return 3', () => {
    let c = [0,1,0,0,0,1,0];
    expect(jumpingOnClouds(c) ).toBe(3);
  })

  test('Case c = [0, 0, 1, 0, 0, 1, 0] return 4', () => {
    let c = [0, 0, 1, 0, 0, 1, 0];
    expect(jumpingOnClouds(c) ).toBe(4);
  })

})
