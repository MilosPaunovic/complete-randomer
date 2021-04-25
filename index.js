/**
 * Returns random generated integer between sent values, inclusively
 *
 * @param {Number} min Minimum value for random number
 * @param {Number} max Maximum value for random number
 * @return {Number} Resulting number
 */
function INTEGER(min, max) {
  const isArgumentInvalid = (arg) => typeof arg !== 'number';

  if ([...arguments].filter(isArgumentInvalid).length > 0) {
    throw new TypeError('Both parameters must be Number');
  }

  return Number(Math.floor(Math.random() * (max - min + 1)) + min);
}

/**
 * Returns random generated string containing number of characters
 * forwarded in function parameter
 *
 * @param {Number} length Number of character for your random string
 * @return {String} Resulting string
 */
function STRING(length) {
  const isArgumentInvalid = (arg) => typeof arg !== 'number';

  if ([...arguments].filter(isArgumentInvalid).length > 0) {
    throw new TypeError('Length parameter must be Number');
  }

  let string = '';

  while (string.length < length) {
    string += Math.random()
      .toString(36)
      .substr(2, length - string.length);
  }

  return string;
}

/**
 * Returns random generated boolean value
 *
 * @return {Boolean} Resulting boolean value
 */
function BOOLEAN() {
  return Boolean(Math.round(Math.random() * 1 + 0) === 0);
}

module.exports = { INTEGER, STRING, BOOLEAN };
