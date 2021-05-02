const { assert } = require('chai');
const { GIBBERISH } = require('../../modules/string');

describe('GIBBERISH()', () => {
  it('Should throw TypeError if more than 2 parameter are sent', () => {
    assert.throw(() => { GIBBERISH(true, true); }, TypeError, '1 parameter(s) allowed');
  });

  it('Should throw TypeError if parameter is not Number', () => {
    assert.throw(() => { GIBBERISH(true); }, TypeError, 'Parameter(s) must be of -number- type');
  });

  it('Should return random string consisting of 10 character without parameters sent', () => {
    const result = GIBBERISH();
    assert.lengthOf(result, 10);
  });

  it('Should return random string consisting of 30 character', () => {
    const result = GIBBERISH(30);
    assert.lengthOf(result, 30);
  });

  it('Should test if returned value is Number', () => {
    const result = GIBBERISH(30);
    assert.isString(result);
  });
});
