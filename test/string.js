const { assert } = require('chai');
const { GIBBERISH, NAMES } = require('../modules/string');

describe('GIBBERISH()', () => {
  it('Should throw TypeError if less than 1 parameter is sent', () => {
    assert.throw(() => { GIBBERISH(); }, TypeError, 'One parameter required');
  });

  it('Should throw TypeError if more than 2 parameter are sent', () => {
    assert.throw(() => { GIBBERISH(1, 2); }, TypeError, 'One parameter required');
  });

  it('Should throw TypeError if parameter is not Number', () => {
    assert.throw(() => { GIBBERISH(true); }, TypeError, 'Parameter -length- must be Number');
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

describe('NAMES()', () => {
  it('Should throw TypeError if more than 1 parameter is sent', () => {
    assert.throw(() => { NAMES(1, 2); }, TypeError, 'Only one parameter allowed');
  });

  it('Should throw TypeError if parameter is not Number', () => {
    assert.throw(() => { NAMES(true); }, TypeError, 'Parameter -howMany- must be Number');
  });

  it('Should return one name if there are no parameter sent', () => {
    const result = NAMES();
    assert.lengthOf(result, 1);
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
