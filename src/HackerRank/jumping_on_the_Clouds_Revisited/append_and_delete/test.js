import {append_and_delete} from './index.js';

describe ("Append and delete", () => {

  test("test case  s=abc t=def k=6",  () => {
    let s = ['a', 'b', 'c'];
    let t = ['d', 'e', 'f'];
    let k = 6;
    expect( append_and_delete(s,t,k)  ).toBe('Yes');
  })

  test("test case s=hackerhappy t=hackerrank k=2",  () => {
    let s = 'hackerhappy';
    let t = 'hackerrank';
    let k = 2;
    expect( append_and_delete(s,t,k)  ).toBe('No');
  })

  test("test case 2 s=y t=yu k = 2",  () => {
    let s = 'y';
    let t = 'yu';
    let k = 2;
    expect( append_and_delete(s,t,k)  ).toBe('No');
  })

  test("test case 2 s=y t=yu k = 1",  () => {
    let s = 'y';
    let t = 'yu';
    let k = 1;
    expect( append_and_delete(s,t,k)  ).toBe('No');
  })

 })
