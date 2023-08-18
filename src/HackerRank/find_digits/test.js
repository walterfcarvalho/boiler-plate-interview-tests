import {find_digits} from './index'


describe ("find digits", () => {

  test("test case 1",  () => {
    expect( find_digits(12)).toBe(2);
  })
  test("test case 2",  () => {
    expect( find_digits(1012)).toBe(3);
  })
})