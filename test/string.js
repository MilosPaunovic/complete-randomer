const { assert } = require('chai');
const { GIBBERISH, NAMES } = require('../modules/string');

describe('GIBBERISH()', function () {
  it('Should throw TypeError if less than 1 parameter is sent', function () {
    assert.throw(() => { GIBBERISH(); }, TypeError, 'One parameter required');
  });

  it('Should throw TypeError if more than 2 parameter are sent', function () {
    assert.throw(() => { GIBBERISH(1, 2); }, TypeError, 'One parameter required');
  });

  it('Should throw TypeError if parameter is not Number', function () {
    assert.throw(() => { GIBBERISH(true); }, TypeError, 'Parameter -length- must be Number');
  });

  it('Should return random string consisting of 30 character', function () {
    const result = GIBBERISH(30);
    assert.lengthOf(result, 30);
  });

  it('Should test if returned value is Number', function () {
    const result = GIBBERISH(30);
    assert.isString(result);
  });
});

describe('NAMES()', function () {
  it('Should throw TypeError if more than 1 parameter is sent', function () {
    assert.throw(() => { NAMES(1, 2); }, TypeError, 'Only one parameter allowed');
  });

  it('Should throw TypeError if parameter is not Number', function () {
    assert.throw(() => { NAMES(true); }, TypeError, 'Parameter -howMany- must be Number');
  });

  it('Should return one name if there are no parameter sent', function () {
    const result = NAMES();
    assert.lengthOf(result, 1);
  });

  it('Should return 30 names when that parameter is sent', function () {
    const result = NAMES(30);
    assert.lengthOf(result, 30);
  });

  it('Should test if returned value is Array', function () {
    const result = NAMES(30);
    assert.isArray(result);
  });
});
