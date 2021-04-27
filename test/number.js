const { expect, assert } = require('chai');
const { INTEGER } = require('../modules/number');

describe('INTEGER()', () => {
  it('Should throw TypeError if less than 2 parameter are sent', () => {
    assert.throw(() => { INTEGER(1); }, TypeError, '2 parameter(s) required');
  });

  it('Should throw TypeError if more than 2 parameter are sent', () => {
    assert.throw(() => { INTEGER(1, 2, 3); }, TypeError, '2 parameter(s) allowed');
  });

  it('Should throw TypeError if at least one parameter is not Number', () => {
    assert.throw(() => { INTEGER(true, 3); }, TypeError, 'Parameter(s) must be of -number- type');
  });

  it('Should return random value beween 1 and 100', () => {
    const result = INTEGER(1, 100);
    expect(result).to.be.at.least(1);
    expect(result).to.be.at.most(100);
  });

  it('Should test if returned value is Number', () => {
    const result = INTEGER(1, 100);
    assert.isNumber(result);
  });
});
