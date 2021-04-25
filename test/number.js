const { expect, assert } = require('chai');
const INTEGER = require('../modules/number');

describe('INTEGER()', function () {
  it('Should throw TypeError if less than 2 parameter are sent', function () {
    assert.throw(() => { INTEGER(1) }, TypeError, 'Two parameters required');
  });

  it('Should throw TypeError if more than 2 parameter are sent', function () {
    assert.throw(() => { INTEGER(1, 2, 3) }, TypeError, 'Two parameters required');
  });

  it('Should throw TypeError if at least one parameter is not Number', function () {
    assert.throw(() => { INTEGER(true, 3) }, TypeError, 'Both parameters must be Number');
  });

  it('Should return random value beween 1 and 100', function () {
    const result = INTEGER(1, 100);
    expect(result).to.be.at.least(1);
    expect(result).to.be.at.most(100);
  });

  it('Should test if returned value is Number', function () {
    const result = INTEGER(1, 100);
    assert.isNumber(result);
  });
});
