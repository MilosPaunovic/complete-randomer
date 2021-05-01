// Importing dependecies
const { INTEGER } = require('./number');

/**
 * Generate random RGB or RGBA color
 *
 * @param {Boolean} [alpha=false] Does the color have an alpha value
 *
 * @return {String} Random RGB or RGBA color
 */
const generateRGBColor = (alpha = false) => {
  // Creating value
  const value = `rgb(${INTEGER(0, 255)} ${INTEGER(0, 255)} ${INTEGER(0, 255)}${alpha ? ` / ${INTEGER(10, 99)}%)` : ')'}`;

  // Returning value
  return value;
};

/**
 * Generate random HSL or HSLA color
 *
 * @param {Boolean} [alpha=false] Does the color have an alpha value
 *
 * @return {String} Random HSL or HSLA color
 */
const generateHSLColor = (alpha = false) => {
  // Creating value
  const value = `hsl(${INTEGER(0, 360)} ${INTEGER(30, 95)}% ${INTEGER(30, 80)}%${alpha ? ` / ${INTEGER(10, 99)}%)` : ')'}`;

  // Returning value
  return value;
};

// Importing dependecies
const { ARGUMENTS } = require('../utils/arguments');

/**
 * Generate random HEX color
 *
 * @return {String} Random hex color
 */
exports.HEX = function () {
  // Arguments checking
  ARGUMENTS(arguments, 0, 0, undefined, undefined);

  // Creating value
  const value = `#${(`${Math.random().toString(16)}000000`).substring(2, 8)}`;

  // Making sure value is casted to proper type
  return String(value);
};

/**
 * Generate random RGB color
 *
 * @return {String} Random RGB color
 */
exports.RGB = function () {
  // Arguments checking
  ARGUMENTS(arguments, 0, 0, undefined, undefined);

  // Creating value
  const value = generateRGBColor();

  // Making sure value is casted to proper type
  return String(value);
};

/**
 * Generate random RGBA color
 *
 * @return {String} Random RGBA color
 */
exports.RGBA = function () {
  // Arguments checking
  ARGUMENTS(arguments, 0, 0, undefined, undefined);

  // Creating value
  const value = generateRGBColor(true);

  // Making sure value is casted to proper type
  return String(value);
};

/**
 * Generate random HSL color
 *
 * @return {String} Random HSL color
 */
exports.HSL = function () {
  // Arguments checking
  ARGUMENTS(arguments, 0, 0, undefined, undefined);

  // Creating value
  const value = generateHSLColor();

  // Making sure value is casted to proper type
  return String(value);
};

/**
 * Generate random HSLA color
 *
 * @return {String} Random HSLA color
 */
exports.HSLA = function () {
  // Arguments checking
  ARGUMENTS(arguments, 0, 0, undefined, undefined);

  // Creating value
  const value = generateHSLColor(true);

  // Making sure value is casted to proper type
  return String(value);
};
