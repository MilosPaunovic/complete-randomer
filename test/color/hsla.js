const { expect, assert } = require('chai');
const { HSLA } = require('../../modules/color');

const REGEX = /^hsl\((\d{1,3}) ([\d.]+)% ([\d.]+)% \/ ([\d.]+)%\)$/;

describe('HSLA()', () => {
  it('Should throw TypeError if parameters are sent', () => {
    assert.throw(() => { HSLA(true); }, TypeError, '0 parameter(s) allowed');
  });

  it('Should return random HSLA color', () => {
    const result = REGEX.test(HSLA());
    expect(result).to.equal(true);
  });

  it('Should test if returned value is String', () => {
    assert.isString(HSLA());
  });
});
