// Importing dependecies
const { ARGUMENTS } = require('../utils/arguments');

/**
 * Returns random generated date between 01/01/1970 and 31/12/2030
 *
 * @return {Date} Resulting value
 */
exports.FULL = function () {
  // Arguments checking
  ARGUMENTS(arguments, 0, 0, undefined);

  // Creating value
  const start = new Date(1970, 0, 1).getTime();
  const end = new Date(2030, 11, 31).getTime();

  const value = (Math.round(Math.random() * (end - start))) + start;

  // Making sure value is casted to proper type
  return new Date(value);
};
