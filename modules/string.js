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
 * @param {Number} [howMany=10] Number of names you need
 *
 * @return {Array} Resulting array of names
 */
exports.NAMES = function (howMany = 10) {
  const MIN_LENGTH = 1;
  const MAX_LENGHT = 1000;

  // Arguments checking
  ARGUMENTS(arguments, 0, 1, 'number');
  if (howMany < MIN_LENGTH) throw new Error(`Minimum length is ${MIN_LENGTH}`);
  if (howMany > MAX_LENGHT) throw new Error(`Maximum length is ${MAX_LENGHT}`);

  // Creating value
  const value = [];

  for (let i = 0; i < howMany; i += 1) {
    const index = INTEGER(0, names.length - 1);
    value.push(names[index]);
  }

  return value;
};
