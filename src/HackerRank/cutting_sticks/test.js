import {cutTheSticks} from './index'

describe ("cutTheSticks", () => {

  test("test case [1,2,3] returns [3,2,1]",  () => {
    expect( cutTheSticks([1,2,3])).toEqual([3,2,1]);
  })
  test("test case [5,4,4,2,2,8] returns [6,4,2,1] ",  () => {
    expect( cutTheSticks([5,4,4,2,2,8])).toEqual([6,4,2,1]);
  })
})