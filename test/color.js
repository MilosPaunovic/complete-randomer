const { expect, assert } = require('chai');
const {
  HEX, RGB, RGBA, HSL, HSLA,
} = require('../modules/color');

const HEX_REGEX = /^#[a-f0-9]{6}$/;
const RGB_REGEX = /^rgb\((\d{1,3}) (\d{1,3}) (\d{1,3})\)$/;
const RGBA_REGEX = /^rgb\((\d{1,3}) (\d{1,3}) (\d{1,3}) \/ ([\d.]+)%\)$/;
const HSL_REGEX = /^hsl\((\d{1,3}) ([\d.]+)% ([\d.]+)%\)$/;
const HSLA_REGEX = /^hsl\((\d{1,3}) ([\d.]+)% ([\d.]+)% \/ ([\d.]+)%\)$/;

describe('COLOR()', () => {
  it('HEX - Should throw TypeError if parameters are sent', () => {
    assert.throw(() => { HEX('hex'); }, TypeError, 'No parameters allowed');
  });
  it('HEX - Should return random hex color', () => {
    const result = HEX_REGEX.test(HEX());
    expect(result).to.equal(true);
  });
  it('HEX - Should test if returned value is String', () => {
    assert.isString(HEX());
  });

  it('RGB - Should throw TypeError if parameters are sent', () => {
    assert.throw(() => { RGB('rgb'); }, TypeError, 'No parameters allowed');
  });
  it('RGB - Should return random rgb color', () => {
    const result = RGB_REGEX.test(RGB());
    expect(result).to.equal(true);
  });
  it('RGB - Should test if returned value is String', () => {
    assert.isString(RGB());
  });

  it('RGBA - Should throw TypeError if parameters are sent', () => {
    assert.throw(() => { RGBA('rgba'); }, TypeError, 'No parameters allowed');
  });
  it('RGBA - Should return random rgba color', () => {
    const result = RGBA_REGEX.test(RGBA());
    expect(result).to.equal(true);
  });
  it('RGBA - Should test if returned value is String', () => {
    assert.isString(RGBA());
  });

  it('HSL - Should throw TypeError if parameters are sent', () => {
    assert.throw(() => { HSL('hsl'); }, TypeError, 'No parameters allowed');
  });
  it('HSL - Should return random rgba color', () => {
    const result = HSL_REGEX.test(HSL());
    expect(result).to.equal(true);
  });
  it('HSL - Should test if returned value is String', () => {
    assert.isString(HSL());
  });

  it('HSLA - Should throw TypeError if parameters are sent', () => {
    assert.throw(() => { HSLA('hsla'); }, TypeError, 'No parameters allowed');
  });
  it('HSLA - Should return random hsla color', () => {
    const result = HSLA_REGEX.test(HSLA());
    expect(result).to.equal(true);
  });
  it('HSLA - Should test if returned value is String', () => {
    assert.isString(HSLA());
  });
});
