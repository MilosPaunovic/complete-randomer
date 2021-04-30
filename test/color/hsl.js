const { expect, assert } = require('chai');
const { HSL } = require('../../modules/color');

const REGEX = /^hsl\((\d{1,3}) ([\d.]+)% ([\d.]+)%\)$/;

describe('HSL()', () => {
  it('Should throw TypeError if parameters are sent', () => {
    assert.throw(() => { HSL(true); }, TypeError, '0 parameter(s) allowed');
  });

  it('Should return random HSL color', () => {
    const result = REGEX.test(HSL());
    expect(result).to.equal(true);
  });

  it('Should test if returned value is String', () => {
    assert.isString(HSL());
  });
});
