// Importing dependecies
const { ARGUMENTS } = require('../utils/arguments');

/**
 * Returns random generated string containing number of characters
 * forwarded in function parameter
 *
 * @param {Number} [length=10] Number of character for your random string
 *
 * @return {String} Resulting string
 */
exports.GIBBERISH = function (length = 10) {
  // Arguments checking
  ARGUMENTS(arguments, 0, 1, 'number', undefined);

  // Creating value
  let value = '';

  while (value.length < length) {
    value += Math.random()
      .toString(36)
      .substr(2, length - value.length);
  }

  // Making sure value is casted to proper type
  return String(value);
};

// Importing dependecies
const { name } = require('../utils/helpers');

/**
 * Returns array of random full names, default length is one, can
 * be overridden using parameter
 *
 * @param {Number} [howMany=10] Number of names you need
 *
 * @return {Array} Resulting array of names
 */
exports.NAMES = function (howMany = 10) {
  // Arguments checking
  ARGUMENTS(arguments, 0, 1, 'number', howMany);

  // Creating value
  const value = [];

  for (let i = 0; i < howMany; i += 1) {
    value.push(name());
  }

  // Returning value
  return value;
};
