/*
1. Input is integer.
2. Return true if year is leap or false if it is not.
3. Should throw error with informative message if no valid argument is received as an input 

2008 - true (/4)
2003 - false (!/4)
1900 - false (/100)
2000 - true (/400)

41 - error 'year must be 42 or more'
2008.4 - error 'year must be integer'
() - error 'please enter year'
"2008" - error 'year must be number'
null - error 'year must be number'
true - error 'year must be number'
false - error 'year must be number'
()=>{} - error 'year must be number'
{} - error 'year must be number'
[] - error 'year must be number'
*/

const isLeapYear = require("./isLeapYear");

describe("test isLeapYear function", () => {
  test("2008 - true", () => {
    const result = isLeapYear(2008);
    expect(result).toBe(true);
    /*
    const expect = (result) => {
      return {
        result,
        toBe(value) {
          return this.result === value;
        },
      };
    };
    */
  });

  test("2003 - false", () => {
    expect(isLeapYear(2003)).toBe(false);
  });

  it("1900 - false", () => {
    expect(isLeapYear(1900)).toBe(false);
  });

  test("2000 - true", () => {
    expect(isLeapYear(2000)).toBe(true);
  });

  test("41 - error 'year must 42 or more'", () => {
    expect(() => isLeapYear(41)).toThrow("year must 42 or more");
  });

  test("2008.4 - error 'year must be integer'", () => {
    expect(() => isLeapYear(2008.4)).toThrow("year must be integer");
  });

  test("() - error 'year must be exist'", () => {
    expect(() => isLeapYear()).toThrow("please enter year");
  });

  test("'2008' - error 'year must be number'", () => {
    expect(() => isLeapYear("2008")).toThrow("year must be number");
  });

  test("null - error 'year must be number'", () => {
    expect(() => isLeapYear(null)).toThrow("year must be number");
  });

  test("true - error 'year must be number'", () => {
    expect(() => isLeapYear(true)).toThrow("year must be number");
  });

  test("false - error 'year must be number'", () => {
    expect(() => isLeapYear(false)).toThrow("year must be number");
  });

  test("()=>{} - error 'year must be number'", () => {
    expect(() => isLeapYear(() => {})).toThrow("year must be number");
  });

  test("{} - error 'year must be number'", () => {
    expect(() => isLeapYear({})).toThrow("year must be number");
  });

  test("[] - error 'year must be number'", () => {
    expect(() => isLeapYear([])).toThrow("year must be number");
  });
});
