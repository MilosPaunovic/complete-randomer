const { expect, assert } = require('chai');
const { IS } = require('../../modules/boolean');

describe('IS()', () => {
  it('Should throw TypeError for containing parameters', () => {
    assert.throw(() => { IS(true); }, TypeError, '0 parameter(s) allowed');
  });

  it('Should return random value', () => {
    const result = IS();
    expect(result).to.be.oneOf([true, false]);
  });

  it('Should test if returned value is Boolean', () => {
    const result = IS();
    assert.isBoolean(result);
  });
});
