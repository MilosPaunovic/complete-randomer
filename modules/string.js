/**
 * Returns random generated string containing number of characters
 * forwarded in function parameter
 *
 * @param {Number} length Number of character for your random string
 * @return {String} Resulting string
 */
module.exports = function STRING(length) {
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
