/**
 * Returns random generated boolean value
 *
 * @return {Boolean} Resulting value
 */
module.exports = function BOOLEAN() {
    // Arguments checking
    if (arguments.length) throw new TypeError('No parameters allowed');

    // Creating value
    const value = Math.round(Math.random() * 1 + 0) === 0;

    // Making sure value is casted to proper type
    return Boolean(value);
}
