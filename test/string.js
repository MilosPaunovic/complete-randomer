const { assert } = require('chai');
const { GIBBERISH } = require('../modules/string');

describe('STRING()', function () {
  it('Should throw TypeError if less than 1 parameter is sent', function () {
    assert.throw(() => { GIBBERISH() }, TypeError, 'One parameter required');
  });

  it('Should throw TypeError if more than 2 parameter are sent', function () {
    assert.throw(() => { GIBBERISH(1, 2) }, TypeError, 'One parameter required');
  });

  it('Should throw TypeError if parameter is not Number', function () {
    assert.throw(() => { GIBBERISH(true) }, TypeError, 'Length parameter must be Number');
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
