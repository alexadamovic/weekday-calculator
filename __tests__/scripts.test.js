import { dayMaker, validDate } from './../src/js/scripts.js';

describe('dayMaker', () => {
  
  test('should return day when date is entered', () => {
    let date = new Date("July 31 1986");
    expect(dayMaker(date)).toEqual("Thursday")
  });
});

describe ('validDate', () => {
  
  test('should return error message if input is not a valid date', () => {
    let date = new Date("pizza and tacos");
    expect(validDate(date)).toEqual("Please enter a valid date.")
  })
})