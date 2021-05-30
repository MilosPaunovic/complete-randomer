const { expect, assert } = require('chai');
const { YES_NO } = require('../../modules/boolean');

describe('YES_NO()', () => {
  it('Should throw TypeError for containing parameters', () => {
    assert.throw(() => { YES_NO(true); }, TypeError, '0 parameter(s) allowed');
  });

  it('Should return random value', () => {
    const result = YES_NO();
    expect(result).to.be.oneOf(['YES', 'NO']);
  });

  it('Should test if returned value is Boolean', () => {
    const result = YES_NO();
    assert.isString(result);
  });
});
