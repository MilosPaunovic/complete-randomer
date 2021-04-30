const { expect, assert } = require('chai');
const { RGB } = require('../../modules/color');

const REGEX = /^rgb\((\d{1,3}) (\d{1,3}) (\d{1,3})\)$/;

describe('RGB()', () => {
  it('Should throw TypeError if parameters are sent', () => {
    assert.throw(() => { RGB(true); }, TypeError, '0 parameter(s) allowed');
  });

  it('Should return random RGB color', () => {
    const result = REGEX.test(RGB());
    expect(result).to.equal(true);
  });

  it('Should test if returned value is String', () => {
    assert.isString(RGB());
  });
});
