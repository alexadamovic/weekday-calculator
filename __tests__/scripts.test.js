import { dayMaker, monthChecker } from './../src/js/scripts.js';

describe('dayMaker', () => {
  
  test('should return day when date is entered', () => {
    let date = new Date("July 31 1986");
    expect(dayMaker(date)).toEqual("Thursday")
  });
});

describe ('monthChecker', () => {
  
  test('should return error message if input is not a valid month', () => {
    let month = "pizza and tacos";
    expect(monthChecker(month)).toEqual("Please enter a valid month.")
  });
  test('should return month if valid month is entered', () => {
    let month = "January";
    expect(monthChecker(month)).toEqual("January")
  });
});