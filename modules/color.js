const { INTEGER } = require('./number');
/**
 * Generate random rgb or rgba color
 * @param {Boolean} [alpha=false] - if color should have alpha
 * @return {String} Random rgb or rgba color
 */
const generateRGBColor = (alpha = false) => {
  const color = `rgb(${INTEGER(0, 255)} ${INTEGER(0, 255)} ${INTEGER(0, 255)}${alpha ? ` / ${INTEGER(10, 99)}%)` : ')'}`;
  return String(color);
};
/**
 * Generate random hsl or hsla color
 * @param {Boolean} [alpha=false] - if color should have alpha
 * @return {String} Random hsl or hsla color
 */
const generateHSLColor = (alpha = false) => {
  const color = `hsl(${INTEGER(0, 360)} ${INTEGER(30, 95)}% ${INTEGER(30, 80)}%${alpha ? ` / ${INTEGER(10, 99)}%)` : ')'}`;
  return String(color);
};

/**
 * Generate random hex color
 *
 * @return {String} Random hex color
 */
exports.HEX = function () {
  if (arguments.length) throw new TypeError('No parameters allowed');
  return String(`#${(`${Math.random().toString(16)}000000`).substring(2, 8)}`);
};
/**
 * Generate random rgb color
 *
 * @return {String} Random rgb color
 */
exports.RGB = function () {
  if (arguments.length) throw new TypeError('No parameters allowed');
  return String(generateRGBColor());
};
/**
 * Generate random rgba color
 *
 * @return {String} Random rgba color
 */
exports.RGBA = function () {
  if (arguments.length) throw new TypeError('No parameters allowed');
  return String(generateRGBColor(true));
};
/**
 * Generate random hsl color
 *
 * @return {String} Random hsl color
 */
exports.HSL = function () {
  if (arguments.length) throw new TypeError('No parameters allowed');
  return String(generateHSLColor());
};
/**
 * Generate random hsla color
 *
 * @return {String} Random hsla color
 */
exports.HSLA = function () {
  if (arguments.length) throw new TypeError('No parameters allowed');
  return String(generateHSLColor(true));
};
