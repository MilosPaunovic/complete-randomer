// Importing dependecies
const { quotes } = require('../data/quotes');
const { INTEGER } = require('./number');
const { ARGUMENTS } = require('../utils/arguments');

/**
 * Generate random quote with 'quoteText' and 'author' properties
 *
 * @return {Object} Random quote with 'quoteText' and 'author' properties
 */
exports.QUOTE = function () {
  // Arguments checking
  ARGUMENTS(arguments, 0, 0, undefined);

  // Creating value
  const quote = quotes[INTEGER(0, quotes.length - 1)];

  return quote;
};
