const { INTEGER } = require('./number');
const rndNum = (min = 0, max = 255) => INTEGER(min, max); //Math.round(Math.random() * 255);
/**
 * Generate random hex color
 *
 * @return {String} Random hex color
 */
 exports.HEX = function() {
  if (arguments.length) throw new TypeError('No parameters allowed');
  return String(`#${(Math.random().toString(16) + '000000').substring(2, 8)}`);
}
/**
 * Generate random rgb color
 *
 * @return {String} Random rgb color
 */
exports.RGB = function() {
  if (arguments.length) throw new TypeError('No parameters allowed');
  return String(`rgb(${rndNum()} ${rndNum()} ${rndNum()})`);
}
/**
 * Generate random rgba color
 *
 * @return {String} Random rgba color
 */
exports.RGBA = function() {
  if (arguments.length) throw new TypeError('No parameters allowed');
  return String(`rgb(${rndNum()} ${rndNum()} ${rndNum()} / ${rndNum(10, 99)}%)`);
}
/**
 * Generate random hsl color
 *
 * @return {String} Random hsl color
 */
exports.HSL = function() {
  if (arguments.length) throw new TypeError('No parameters allowed');
  return String(`hsl(${rndNum(0, 360)} ${rndNum(30, 95)}% ${rndNum(30, 80)}%)`);
}
/**
 * Generate random hsla color
 *
 * @return {String} Random hsla color
 */
exports.HSLA = function() {
  if (arguments.length) throw new TypeError('No parameters allowed');
  return String(`hsl(${rndNum(0, 360)} ${rndNum(30, 95)}% ${rndNum(30, 80)}% / ${rndNum(10, 99)}%)`);
}