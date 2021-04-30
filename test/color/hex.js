const { expect, assert } = require('chai');
const { HEX } = require('../../modules/color');

const REGEX = /^#[a-f0-9]{6}$/;

describe('HEX()', () => {
  it('Should throw TypeError if parameters are sent', () => {
    assert.throw(() => { HEX(true); }, TypeError, '0 parameter(s) allowed');
  });

  it('Should return random HEX color', () => {
    const result = REGEX.test(HEX());
    expect(result).to.equal(true);
  });

  it('Should test if returned value is String', () => {
    assert.isString(HEX());
  });
});
