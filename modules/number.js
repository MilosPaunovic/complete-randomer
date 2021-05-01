// Importing dependecies
const { ARGUMENTS } = require('../utils/arguments');

/**
 * Returns random generated integer between sent values, inclusively
 *
 * @param {Number} [min=1] Minimum value for random number
 * @param {Number} [max=100] Maximum value for random number
 *
 * @return {Number} Resulting number
 */
exports.INTEGER = function (min = 1, max = 100) {
  // Arguments checking
  ARGUMENTS(arguments, 0, 2, 'number', undefined);

  // Creating value
  const value = Math.floor(Math.random() * (max - min + 1)) + min;

  // Making sure value is casted to proper type
  return Number(value);
};
