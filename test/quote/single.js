const { assert, expect } = require('chai');
const { SINGLE } = require('../../modules/quote');

describe('SINGLE()', () => {
  it('Should throw TypeError if parameters are sent', () => {
    assert.throw(() => { SINGLE('test'); }, TypeError, '0 parameter(s) allowed');
  });

  it('Should test if returned value is Object', () => {
    const result = SINGLE();
    assert.isObject(result);
  });

  it('Should test for properties \'quoteText\' and \'author\'', () => {
    const result = SINGLE();
    expect(result).to.have.property('quoteText');
    expect(result).to.have.property('author');
  });
});
