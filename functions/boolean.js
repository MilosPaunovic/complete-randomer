/**
 * Returns random generated boolean value
 *
 * @return {Boolean} Resulting value
 */
module.exports = function BOOLEAN() {
    return Boolean(Math.round(Math.random() * 1 + 0) === 0);
}