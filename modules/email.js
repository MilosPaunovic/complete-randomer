// Importing dependecies
const { ARGUMENTS } = require('../utils/arguments');
const { name: fullName } = require('../utils/helpers');

/**
 * Returns random generated email address
 *
 * @param {String} [host='randomer']] The host part of the address
 *
 * @return {String} Resulting email string
 */
exports.SINGLE = function (host = 'randomer') {
  // Arguments checking
  ARGUMENTS(arguments, 0, 1, 'string', undefined);

  // Creating value
  const name = fullName().replace(/\s/g, '.').toLowerCase();
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
  // Arguments checking
  ARGUMENTS(arguments, 0, 1, 'number', howMany);

  // Creating value
  const value = [];

  for (let i = 0; i < howMany; i += 1) {
    const email = exports.SINGLE();
    value.push(email);
  }

  // Returning value
  return value;
};
