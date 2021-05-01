const { assert, expect } = require('chai');
const { SINGLE } = require('../../modules/email');

const REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

describe('SINGLE()', () => {
  it('Should throw TypeError if more than 1 parameter is sent', () => {
    assert.throw(() => { SINGLE(true, true); }, TypeError, '1 parameter(s) allowed');
  });

  it('Should throw TypeError if parameter is not String', () => {
    assert.throw(() => { SINGLE(true); }, TypeError, 'Parameter(s) must be of -string- type');
  });

  it('Should test if value is email', () => {
    const result = REGEX.test(SINGLE());
    expect(result).to.equal(true);
  });

  it('Should test if returned value is String', () => {
    const result = SINGLE();
    assert.isString(result);
  });
});
