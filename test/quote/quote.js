const { assert, expect } = require('chai');
const { QUOTE } = require('../../modules/quote');

describe('QUOTE()', () => {
  it('Should throw TypeError if parameters are sent', () => {
    assert.throw(() => { QUOTE('test'); }, TypeError, '0 parameter(s) allowed');
  });

  it('Should test if returned value is Object', () => {
    const result = QUOTE();
    assert.isObject(result);
  });

  it('Should test for properties \'quoteText\' and \'author\'', () => {
    const result = QUOTE();
    expect(result).to.have.property('quoteText');
    expect(result).to.have.property('author');
  });
});
