const { assert } = require('chai');
const { LIST } = require('../../modules/quote');

describe('LIST()', () => {
  it('Should throw TypeError if more than 1 parameter is sent', () => {
    assert.throw(() => { LIST(1, 2); }, TypeError, '1 parameter(s) allowed');
  });

  it('Should throw TypeError if parameter is not Number', () => {
    assert.throw(() => { LIST('test'); }, TypeError, 'Parameter(s) must be of -number- type');
  });

  it('Should throw Error if parameter is larger then 1000', () => {
    assert.throw(() => { LIST(1001); }, Error, 'Max length is 1000');
  });

  it('Should throw Error if parameter is less then 1', () => {
    assert.throw(() => { LIST(0); }, Error, 'Min length is 1');
  });

  it('Should return 10 quotes if there are no parameter sent', () => {
    const result = LIST();
    assert.lengthOf(result, 10);
  });

  it('Should return 30 quotes when that parameter is sent', () => {
    const result = LIST(30);
    assert.lengthOf(result, 30);
  });

  it('Should test if returned value is Array', () => {
    const result = LIST(30);
    assert.isArray(result);
  });
});
