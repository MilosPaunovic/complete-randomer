/**
 * Helper function for checking number of arguments, type and in case
 * of mistakes, throwing adequate errors
 *
 * @param {Number} argumentsLength Length of the arguments array
 * @param {Number} allowed Number of allowed arguments for particular function
 *
 * @return {Void} No return value, but error is thrown if necessary
 */
exports.ARGUMENTS = function (argumentsLength, allowed) {
  if (argumentsLength && allowed === 0) throw new TypeError('No parameters allowed');
};
