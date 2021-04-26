/**
 * Returns random generated string containing number of characters
 * forwarded in function parameter
 *
 * @param {Number} length Number of character for your random string
 * @return {String} Resulting string
 */
exports.GIBBERISH = function (length) {
    // Arguments checking
    if (arguments.length !== 1) throw new TypeError('One parameter required');

    const isArgumentInvalid = (arg) => typeof arg !== 'number';

    if ([...arguments].filter(isArgumentInvalid).length > 0) {
        throw new TypeError('Parameter -length- must be Number');
    }

    // Creating value
    let string = '';

    while (string.length < length) {
        string += Math.random()
            .toString(36)
            .substr(2, length - string.length);
    }

    // Making sure value is casted to proper type
    return String(string);
};

/**
 * Returns array of random full names, default length is one, can
 * be overridden using parameter
 *
 * @param {Number} howMany Number of names you need
 * @return {Array} Resulting array of names
 */
exports.NAMES = function (howMany = 1) {
    // Importing dependecies
    const { names } = require('../data/names');
    const { INTEGER } = require('./number');

    // Arguments checking
    if (arguments.length > 1) throw new TypeError('Only one parameter allowed');

    const isArgumentInvalid = (arg) => typeof arg !== 'number';

    if ([...arguments].filter(isArgumentInvalid).length > 0) {
        throw new TypeError('Parameter -howMany- must be Number');
    }

    // Creating value
    let result = [];

    for (let i = 0; i < howMany; i++) {
        const index = INTEGER(0, names.length - 1);
        result.push(names[index]);
    }

    return result;
};
