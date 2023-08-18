import {repeatedString} from '.';

describe('repeatedString', () => {

  test('Case s=abcac n=10 return 4', () => {
    let s = 'abcac';
    let n = 10;
    expect( repeatedString(s,n)).toBe(4);
  })
  
  test('Case s=aba n=10 return 7', () => {
    let s = 'aba';
    let n = 10;
    expect( repeatedString(s,n)).toBe(7);
  })

  test(`Case s=kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm n=736778906400 return 51574523448`, () => {
    let s = 'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm';
    let n = 736778906400;
    expect( repeatedString(s,n)).toBe(51574523448);
  })

})
