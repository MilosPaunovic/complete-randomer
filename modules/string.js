// Importing dependecies
const { ARGUMENTS } = require('../utils/arguments');

/**
 * Returns random generated string containing number of characters
 * forwarded in function parameter
 *
 * @param {Number} length Number of character for your random string
 *
 * @return {String} Resulting string
 */
exports.GIBBERISH = function (length) {
  // Arguments checking
  ARGUMENTS(arguments, 1, 1, 'number');

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
const { names } = require('../data/names');
const { INTEGER } = require('./number');

/**
 * Returns array of random full names, default length is one, can
 * be overridden using parameter
 *
 * @param {Number} howMany Number of names you need
 *
 * @return {Array} Resulting array of names
 */
exports.NAMES = function (howMany = 1) {
  // Arguments checking
  ARGUMENTS(arguments, 0, 1, 'number');

  // Creating value
  const value = [];

  for (let i = 0; i < howMany; i += 1) {
    const index = INTEGER(0, names.length - 1);
    value.push(names[index]);
  }

  return value;
};
