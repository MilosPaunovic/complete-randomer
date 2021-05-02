const { assert } = require('chai');
const { NAMES } = require('../../modules/string');

describe('NAMES()', () => {
  it('Should throw TypeError if more than 1 parameter is sent', () => {
    assert.throw(() => { NAMES(true, true); }, TypeError, '1 parameter(s) allowed');
  });

  it('Should throw TypeError if parameter is not Number', () => {
    assert.throw(() => { NAMES(true); }, TypeError, 'Parameter(s) must be of -number- type');
  });

  it('Should throw Error if parameter is smaller than 1', () => {
    assert.throw(() => { NAMES(0); }, Error, 'Number must be between 1 and 1000');
  });

  it('Should throw Error if parameter is larger than 1000', () => {
    assert.throw(() => { NAMES(1001); }, Error, 'Number must be between 1 and 1000');
  });

  it('Should return 10 names if there are no parameter sent', () => {
    const result = NAMES();
    assert.lengthOf(result, 10);
  });

  it('Should return 30 names when that parameter is sent', () => {
    const result = NAMES(30);
    assert.lengthOf(result, 30);
  });

  it('Should test if returned value is Array', () => {
    const result = NAMES(30);
    assert.isArray(result);
  });
});
