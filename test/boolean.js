const { expect, assert } = require('chai');
const BOOLEAN = require('../modules/boolean');

describe('BOOLEAN()', function () {
  it('Should return random value', function () {
    const result = BOOLEAN();
    expect(result).to.be.oneOf([true, false]);
  });

  it('Should test if returned value is Boolean', function () {
    const result = BOOLEAN();
    assert.typeOf(result, 'boolean');
  });

  it('Should throw TypeError for containing parameters', function () {
    assert.throw(() => { BOOLEAN(true) }, TypeError, 'No parameters allowed');
  });
});
