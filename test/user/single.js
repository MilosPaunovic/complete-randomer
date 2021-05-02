const { assert, expect } = require('chai');
const { SINGLE } = require('../../modules/user');

describe('SINGLE()', () => {
  it('Should throw TypeError for containing parameters', () => {
    assert.throw(() => { SINGLE(true); }, TypeError, '0 parameter(s) allowed');
  });

  it('Should test if returned value is Object', () => {
    const result = SINGLE();
    assert.isObject(result);
  });

  it('Should test if all required properties exist', () => {
    const result = SINGLE();
    expect(result).to.have.property('firstName');
    expect(result).to.have.property('lastName');
    expect(result).to.have.property('email');
    expect(result).to.have.property('password');
    expect(result).to.have.property('dob');
  });
});
