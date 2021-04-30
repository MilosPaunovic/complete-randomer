// Importing dependecies
const { ARGUMENTS } = require('../utils/arguments');

const { names } = require('../data/names');
const { INTEGER } = require('./number');

/**
 * Returns random generated email address
 *
 * @param {String} [host='randomer']] The host part of the address
 *
 * @return {String} Resulting email string
 */
exports.SINGLE = function (host = 'randomer') {
  // Arguments checking
  ARGUMENTS(arguments, 0, 1, 'string');

  // Creating value
  const name = names[INTEGER(0, names.length - 1)].replace(/\s/g, '.').toLowerCase();
  const value = `${name}@${host}.com`;

  // Making sure value is casted to proper type
  return String(value);
};

/**
 * Returns array of random email addresses, default length is 10, can
 * be overridden using parameter
 *
 * @param {Number} [howMany=10] Number of emails you need
 *
 * @return {Array} Resulting array of emails
 */
exports.LIST = function (howMany = 10) {
  const MIN_LENGTH = 1;
  const MAX_LENGHT = 1000;

  // Arguments checking
  ARGUMENTS(arguments, 0, 1, 'number');
  if (howMany < MIN_LENGTH) throw new Error(`Minimum length is ${MIN_LENGTH}`);
  if (howMany > MAX_LENGHT) throw new Error(`Maximum length is ${MAX_LENGHT}`);

  // Creating value
  const value = [];

  for (let i = 0; i < howMany; i += 1) {
    const email = exports.SINGLE();
    value.push(email);
  }

  return value;
};
