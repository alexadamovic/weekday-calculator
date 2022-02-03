import { dayMaker } from './../src/js/scripts.js';

describe('dayMaker', () => {
  
  test('should return day when date is entered', () => {
    let date = new Date("July 31 1986");
    expect(dayMaker(date)).toEqual("Thursday")
  });
});