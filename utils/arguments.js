const MINIMUM_LENGTH = 1;
const MAXIMUM_LENGHT = 1000;

/**
 * Helper function for checking number of arguments, its type and, in
 * case of mistakes, throwing adequate errors
 *
 * @param {Number} args Arguments array
 * @param {Number} required Number of required arguments
 * @param {Number} allowed Number of allowed arguments
 * @param {String} type Type of arguments for checking
 * @param {Number} howMany Should do the check for minimum and maximum numbers
 *
 * @return {Void} No return value, but error is thrown if necessary
 */
exports.ARGUMENTS = function (args, required, allowed, type, howMany) {
  const { length } = args;

  // Checking required and allowed number of parameters
  if (length < required) throw new TypeError(`${required} parameter(s) required`);
  else if (length > allowed) throw new TypeError(`${allowed} parameter(s) allowed`);

  // Checking for valid parameter type
  const isArgumentInvalid = (arg) => typeof arg !== type;
  if ([...args].filter(isArgumentInvalid).length > 0) throw new TypeError(`Parameter(s) must be of -${type}- type`);

  // Checking minimum and maximum result numbers for arrays
  if (howMany < MINIMUM_LENGTH || howMany > MAXIMUM_LENGHT) throw new Error(`Number must be between ${MINIMUM_LENGTH} and ${MAXIMUM_LENGHT}`);
};
