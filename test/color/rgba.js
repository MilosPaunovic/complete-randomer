const { expect, assert } = require('chai');
const { RGBA } = require('../../modules/color');

const REGEX = /^rgb\((\d{1,3}) (\d{1,3}) (\d{1,3}) \/ ([\d.]+)%\)$/;

describe('RGBA()', () => {
  it('Should throw TypeError if parameters are sent', () => {
    assert.throw(() => { RGBA(true); }, TypeError, '0 parameter(s) allowed');
  });

  it('Should return random RGBA color', () => {
    const result = REGEX.test(RGBA());
    expect(result).to.equal(true);
  });

  it('Should test if returned value is String', () => {
    assert.isString(RGBA());
  });
});
