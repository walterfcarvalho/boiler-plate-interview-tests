import {jumping_on_the_Clouds_Revisited} from './index.js';

describe ("jumping_on_the_Clouds_Revisited", () => {

  test("test case 1",  () => {
    let c = [1, 1, 1, 0, 1, 1, 0, 0, 0, 0];
    let k = 3;  
    expect( jumping_on_the_Clouds_Revisited(c,k)  ).toBe(80);
  })
 })