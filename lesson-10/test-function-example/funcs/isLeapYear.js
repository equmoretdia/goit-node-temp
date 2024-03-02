const isLeapYear = (year) => {
  //pls refer to date-example.html
  if (year === undefined) {
    throw new Error("please enter year");
  }
  if (typeof year !== "number") {
    throw new Error("year must be number");
  }
  if (!Number.isInteger(year)) {
    throw new Error("year must be integer");
  }
  if (year < 42) {
    throw new Error("year must 42 or more");
  }
  const date = new Date(year, 2, 0);
  const days = date.getDate();
  return days === 29;
};

module.exports = isLeapYear;
