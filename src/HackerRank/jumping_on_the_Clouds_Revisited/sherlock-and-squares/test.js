import { squares } from '.';

describe ("sherlock and squares", () => {

  test("test case a=3 b=9 res=2", () => {
    let a = 3
    let b = 9;  
    expect( squares(a,b)).toBe(2);
  })

  test("test case a=17 b=24 res=0", () => {
    let a = 17
    let b = 24;  
    expect( squares(a,b)).toBe(0);
  })

  test("test case a=465868129 b=988379794 res=0", () => {
    let a = 465868129;
    let b = 988379794;  
    expect( squares(a,b)).toBe(9855);
  })
 })