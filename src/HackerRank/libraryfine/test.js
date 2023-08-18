import { libraryFine } from '.';

describe ("find digits", () => {
  
  test("test case, before due, 14,6,2018 - 1,7,2018",  () => {
    expect( libraryFine(14, 6, 2018, 5, 7, 2018) ).toBe(0);
  })

  test("test case, one year of overdue, 14,7,2019 - 14,7,2018",  () => {
    expect( libraryFine(14, 7, 2019, 14, 7, 2018) ).toBe(10000);
  })

  test("test case, one month of overdue, 14,7,2019 - 14,7,2018",  () => {
    expect( libraryFine(14, 8, 2018, 14, 7, 2018) ).toBe(500);
  })


  test("test case, some day overdue, 14,7,2018 - 5,7,2018",  () => {
    expect( libraryFine(14, 7, 2018, 5, 7, 2018) ).toBe(135);
  })

  test("test case d1,m1,y1=14,7,2018, d2,m2,y2= 5,7,2018",  () => {
    expect( libraryFine(2, 7, 1014, 1, 1, 1015) ).toBe(0);
  })

})