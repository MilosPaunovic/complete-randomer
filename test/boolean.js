const { expect, assert } = require('chai');
const { IS } = require('../modules/boolean');

describe('IS()', function () {
  it('Should throw TypeError for containing parameters', function () {
    assert.throw(() => { IS(true); }, TypeError, 'No parameters allowed');
  });

  it('Should return random value', function () {
    const result = IS();
    expect(result).to.be.oneOf([true, false]);
  });

  it('Should test if returned value is Boolean', function () {
    const result = IS();
    assert.isBoolean(result);
  });
});
