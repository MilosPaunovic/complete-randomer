const { expect, assert } = require('chai');
const {
  HEX, RGB, RGBA, HSL, HSLA,
} = require('../modules/color');

const HEX_REGEX = /^#[a-f0-9]{6}$/;
const RGB_REGEX = /^rgb\((\d{1,3}) (\d{1,3}) (\d{1,3})\)$/;
const RGBA_REGEX = /^rgb\((\d{1,3}) (\d{1,3}) (\d{1,3}) \/ ([\d.]+)%\)$/;
const HSL_REGEX = /^hsl\((\d{1,3}) ([\d.]+)% ([\d.]+)%\)$/;
const HSLA_REGEX = /^hsl\((\d{1,3}) ([\d.]+)% ([\d.]+)% \/ ([\d.]+)%\)$/;

describe('HEX()', () => {
  it('Should throw TypeError if parameters are sent', () => {
    assert.throw(() => { HEX(true); }, TypeError, '0 parameter(s) allowed');
  });

  it('Should return random HEX color', () => {
    const result = HEX_REGEX.test(HEX());
    expect(result).to.equal(true);
  });

  it('Should test if returned value is String', () => {
    assert.isString(HEX());
  });
});

describe('RGB()', () => {
  it('Should throw TypeError if parameters are sent', () => {
    assert.throw(() => { RGB(true); }, TypeError, '0 parameter(s) allowed');
  });

  it('Should return random RGB color', () => {
    const result = RGB_REGEX.test(RGB());
    expect(result).to.equal(true);
  });

  it('Should test if returned value is String', () => {
    assert.isString(RGB());
  });
});

describe('RGBA()', () => {
  it('Should throw TypeError if parameters are sent', () => {
    assert.throw(() => { RGBA(true); }, TypeError, '0 parameter(s) allowed');
  });

  it('Should return random RGBA color', () => {
    const result = RGBA_REGEX.test(RGBA());
    expect(result).to.equal(true);
  });

  it('Should test if returned value is String', () => {
    assert.isString(RGBA());
  });
});

describe('HSL()', () => {
  it('Should throw TypeError if parameters are sent', () => {
    assert.throw(() => { HSL(true); }, TypeError, '0 parameter(s) allowed');
  });

  it('Should return random HSL color', () => {
    const result = HSL_REGEX.test(HSL());
    expect(result).to.equal(true);
  });

  it('Should test if returned value is String', () => {
    assert.isString(HSL());
  });
});

describe('HSLA()', () => {
  it('Should throw TypeError if parameters are sent', () => {
    assert.throw(() => { HSLA(true); }, TypeError, '0 parameter(s) allowed');
  });

  it('Should return random HSLA color', () => {
    const result = HSLA_REGEX.test(HSLA());
    expect(result).to.equal(true);
  });

  it('Should test if returned value is String', () => {
    assert.isString(HSLA());
  });
});
