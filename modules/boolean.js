// Importing dependecies
const { ARGUMENTS } = require('../utils/arguments');

/**
 * Returns random generated boolean value
 *
 * @return {Boolean} Resulting value
 */
exports.IS = function () {
  // Arguments checking
  ARGUMENTS(arguments, 0, 0, undefined);

  // Creating value
  const value = Math.round(Math.random() * 1 + 0) === 0;

  // Making sure value is casted to proper type
  return Boolean(value);
};
