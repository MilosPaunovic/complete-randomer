// Importing dependecies
const { ARGUMENTS } = require('../utils/arguments');

/**
 * Returns random generated boolean value
 *
 * @return {Boolean} Resulting value
 */
const generateBoolean = () => {
  // Creating value
  const value = Math.round(Math.random() * 1) === 0;

  // Returning value
  return value;
};

/**
 * Returns random generated boolean value
 *
 * @return {Boolean} Resulting value
 */
exports.IS = function () {
  // Arguments checking
  ARGUMENTS(arguments, 0, 0, undefined, undefined);

  // Creating value
  const value = generateBoolean();

  // Making sure value is casted to proper type
  return Boolean(value);
};

/**
 * Returns random generated YES or NO string
 *
 * @return {String} Resulting YES or NO value
 */
exports.YES_NO = function () {
  // Arguments checking
  ARGUMENTS(arguments, 0, 0, undefined, undefined);

  // Creating value
  const value = generateBoolean() ? 'YES' : 'NO';

  // Making sure value is casted to proper type
  return String(value);
};
