const { assert } = require('chai');
const STRING = require('../modules/string');

describe('STRING()', function () {
  it('Should throw TypeError if less than 1 parameter is sent', function () {
    assert.throw(() => { STRING() }, TypeError, 'One parameter required');
  });

  it('Should throw TypeError if more than 2 parameter are sent', function () {
    assert.throw(() => { STRING(1, 2) }, TypeError, 'One parameter required');
  });

  it('Should throw TypeError if parameter is not Number', function () {
    assert.throw(() => { STRING(true) }, TypeError, 'Length parameter must be Number');
  });

  it('Should return random string consisting of 30 character', function () {
    const result = STRING(30);
    assert.lengthOf(result, 30);
  });

  it('Should test if returned value is Number', function () {
    const result = STRING(30);
    assert.isString(result);
  });
});
