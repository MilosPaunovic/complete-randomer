const { assert, expect } = require('chai');
const { SINGLE } = require('../../modules/quote');

describe('SINGLE()', () => {
  it('Should throw TypeError if parameters are sent', () => {
    assert.throw(() => { SINGLE(true); }, TypeError, '0 parameter(s) allowed');
  });

  it('Should test if returned value is Object', () => {
    const result = SINGLE();
    assert.isObject(result);
  });

  it('Should test if properties \'text\' and \'author\' exist', () => {
    const result = SINGLE();
    expect(result).to.have.property('text');
    expect(result).to.have.property('author');
  });
});
