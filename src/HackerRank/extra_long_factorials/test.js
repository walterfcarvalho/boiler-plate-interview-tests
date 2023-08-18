import { extraLongFactorials } from '.';

describe ("extra_long_factorials", () => {

  test("test case 1",  () => {
    expect( extraLongFactorials(25)).toBe(15511210043330985984000000n);
  })

  test("test case 2",  () => {
    expect( extraLongFactorials(26)).toBe(403291461126605635584000000n);
  })

 })