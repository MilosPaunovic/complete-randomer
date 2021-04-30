// Importing dependecies
const { ARGUMENTS } = require('../utils/arguments');

const { quotes } = require('../data/quotes');
const { INTEGER } = require('./number');

/**
 * Generate random quote object with 'text' and 'author' properties
 *
 * @return {Object} Random quote object
 */
exports.SINGLE = function () {
  // Arguments checking
  ARGUMENTS(arguments, 0, 0, undefined, undefined);

  // Creating value
  const quote = quotes[INTEGER(0, quotes.length - 1)];

  // Returning value
  return quote;
};

/**
 * Generate array of random quotes; default length is 10, can be overridden
 * using parameter. Maximum values are between 1 and 1000
 *
 * @param {Number} [howMany=10] Number of quotes you need
 *
 * @return {Array} Resulting array of random quotes
 */
exports.LIST = function (howMany = 10) {
  // Arguments checking
  ARGUMENTS(arguments, 0, 1, 'number', howMany);

  // Creating a Set for unique quotes
  const value = new Set();

  while (value.size < howMany) {
    // Get random quote from quotes list
    const quote = JSON.stringify(quotes[INTEGER(0, quotes.length - 1)]);
    // Add quote if it's unique
    if (!value.has(quote)) value.add(quote);
  }

  // Making sure value is casted to proper type
  return Array.from(value).map((quote) => JSON.parse(quote));
};
