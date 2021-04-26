/**
 * Returns random generated integer between sent values, inclusively
 *
 * @param {Number} min Minimum value for random number
 * @param {Number} max Maximum value for random number
 * @return {Number} Resulting number
 */
exports.INTEGER = function (min, max) {
    // Arguments checking
    if (arguments.length !== 2) throw new TypeError('Two parameters required');

    const isArgumentInvalid = (arg) => typeof arg !== 'number';

    if ([...arguments].filter(isArgumentInvalid).length > 0) {
        throw new TypeError('Both parameters must be Number');
    }

    // Creating value
    const value = Math.floor(Math.random() * (max - min + 1)) + min;

    // Making sure value is casted to proper type
    return Number(value);
};
