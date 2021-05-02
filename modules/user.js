// Importing dependecies
const { ARGUMENTS } = require('../utils/arguments');
const { name } = require('../utils/helpers');
const { GIBBERISH } = require('./string');
const { PAST } = require('./date');

/**
 * Returns random generated user object
 *
 * @return {Object} Resulting user object containtng parameters first
 * name, last name, email, password & date of birth
 */
exports.SINGLE = function () {
  // Arguments checking
  ARGUMENTS(arguments, 0, 0, undefined, undefined);

  // Creating value
  const user = name().split(' ');

  const value = {
    firstName: user[0],
    lastName: user[1],
    email: `${user[0]}.${user[1]}@randomer.com`.toLowerCase(),
    password: GIBBERISH(10),
    dob: PAST(),
  };

  // Returning value
  return value;
};
