// Importing dependecies
const { ARGUMENTS } = require('../utils/arguments');

/**
 * Returns random generated date between sent parameters
 *
 *  @param {Date} start Minimum date
 *  @param {Date} end Maximum date
 *
 * @return {Date} Resulting value
 */
const generateDate = (start, end) => {
  // Creating value
  const value = (Math.round(Math.random() * (end - start))) + start;

  // Returning value
  return value;
};

/**
 * Returns random generated date between 01/01/1970 and 31/12/2030
 *
 * @return {Date} Resulting value
 */
exports.FULL = function () {
  // Arguments checking
  ARGUMENTS(arguments, 0, 0, undefined, undefined);

  // Creating value
  const start = new Date(1970, 0, 1).getTime();
  const end = new Date(2030, 11, 31).getTime();

  const value = generateDate(start, end);

  // Making sure value is casted to proper type
  return new Date(value);
};

/**
 * Returns random generated date between 01/01/1970 and current date
 *
 * @return {Date} Resulting value
 */
exports.PAST = function () {
  // Arguments checking
  ARGUMENTS(arguments, 0, 0, undefined, undefined);

  // Creating value
  const start = new Date(1970, 0, 1).getTime();
  const end = new Date(Date.now()).getTime();

  const value = generateDate(start, end);

  // Making sure value is casted to proper type
  return new Date(value);
};

/**
 * Returns random generated date between current date and 31/12/2030
 *
 * @return {Date} Resulting value
 */
exports.FUTURE = function () {
  // Arguments checking
  ARGUMENTS(arguments, 0, 0, undefined, undefined);

  // Creating value
  const start = new Date(Date.now()).getTime();
  const end = new Date(2030, 11, 31).getTime();

  const value = generateDate(start, end);

  // Making sure value is casted to proper type
  return new Date(value);
};
