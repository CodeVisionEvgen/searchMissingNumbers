import {searchMissingNumbers,getBigNumbers} from "../src/index";


describe('Static tests',()=>{
  it('[1,4,5,6]',()=>{
    const value = [1,4,5,6];
    expect(searchMissingNumbers(value)).toEqual([2,3])
  })
  it("[3,4,5,6,7]", () => {
    const value = [3, 4, 5, 6, 7];
    expect(searchMissingNumbers(value)).toEqual([1,2]);
  });
  it("[1,2,3,4,7,8,9,10]", () => {
    const value = [1,2,3,4,7,8,9,10];
    expect(searchMissingNumbers(value)).toEqual([5,6]);
  });
})

describe('Dynamic tests',()=>{
  for (const dynamicData of Array.from({length:10},()=>getBigNumbers(Math.random() * 10))) {
    it(JSON.stringify("expect: " + JSON.stringify(dynamicData.deleted)),()=>{
      expect(searchMissingNumbers(dynamicData.array)).toEqual(dynamicData.deleted.sort((a,b)=>a-b));
    })
  }
})
