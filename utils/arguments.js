/**
 * Helper function for checking number of arguments, its type and, in
 * case of mistakes, throwing adequate errors
 *
 * @param {Number} args Arguments array
 * @param {Number} required Number of required arguments
 * @param {Number} allowed Number of allowed arguments
 * @param {String} type Type of arguments for checking
 *
 * @return {Void} No return value, but error is thrown if necessary
 */
exports.ARGUMENTS = function (args, required, allowed, type) {
  if (args.length < required) throw new TypeError(`${required} parameter(s) required`);
  else if (args.length > allowed) throw new TypeError(`${allowed} parameter(s) allowed`);

  if (type) {
    const isArgumentInvalid = (arg) => typeof arg !== type;
    if ([...args].filter(isArgumentInvalid).length > 0) throw new TypeError(`Parameter(s) must be of -${type}- type`);
  }
};
