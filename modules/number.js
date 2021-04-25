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
