// Importing dependecies
const { names } = require('../data/names');
const { INTEGER } = require('../modules/number');

/**
 * Helper function for returning single random name as
 * string from data array
 *
 * @return {String} Random name
 */
exports.name = function () {
  // Creating value
  const index = INTEGER(0, names.length - 1);
  const value = names[index];

  // Making sure value is casted to proper type
  return String(value);
};
