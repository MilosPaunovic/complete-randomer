// Importing dependecies
const { ARGUMENTS } = require('../utils/arguments');

/**
 * Returns random generated integer between sent values, inclusively
 *
 * @param {Number} min Minimum value for random number
 * @param {Number} max Maximum value for random number
 *
 * @return {Number} Resulting number
 */
exports.INTEGER = function (min, max) {
  // Arguments checking
  ARGUMENTS(arguments, 2, 2, 'number');

  // Creating value
  const value = Math.floor(Math.random() * (max - min + 1)) + min;

  // Making sure value is casted to proper type
  return Number(value);
};
