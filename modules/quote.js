// Importing dependecies
const { quotes } = require('../data/quotes');
const { INTEGER } = require('./number');
const { ARGUMENTS } = require('../utils/arguments');

/**
 * Generate random quote with 'quoteText' and 'author' properties
 *
 * @return {Object} Random quote with 'quoteText' and 'author' properties
 */
exports.SINGLE = function () {
  // Arguments checking
  ARGUMENTS(arguments, 0, 0, undefined);

  // Creating value
  const quote = quotes[INTEGER(0, quotes.length - 1)];

  return quote;
};

const MAX_LENGHT = 1000;
const MIN_LENGTH = 1;
/**
 * Returns array of random quotes, default length is 10, can be overridden using parameter.
 * Max length is 1000. Min length is 1
 *
 * @param {Number} [howMany=10] Number of quotes you need
 *
 * @return {Array} Resulting array of quotes
 */
exports.LIST = function (howMany = 10) {
  // Arguments checking
  ARGUMENTS(arguments, 0, 1, 'number');
  // Check if length is over the limit
  if (howMany > MAX_LENGHT) throw new Error(`Max length is ${MAX_LENGHT}`);
  // Check if length is over the limit
  if (howMany < MIN_LENGTH) throw new Error(`Min length is ${MIN_LENGTH}`);

  // Creating a Set for unique quotes
  const quotesSet = new Set();

  while (quotesSet.size < howMany) {
    // Get random quote from quotes list
    const quote = JSON.stringify(quotes[INTEGER(0, quotes.length - 1)]);
    // Add quote if it's unique
    if (!quotesSet.has(quote)) quotesSet.add(quote);
  }

  // Returning Array of unique quotes
  return Array.from(quotesSet).map((quote) => JSON.parse(quote));
};
