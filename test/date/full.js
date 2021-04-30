const chai = require('chai');
chai.use(require('chai-datetime'));

const { assert } = chai;
const { FULL } = require('../../modules/date');

describe('FULL()', () => {
  it('Should throw TypeError for containing parameters', () => {
    assert.throw(() => { FULL(true); }, TypeError, '0 parameter(s) allowed');
  });

  it('Should test if returned value is after 01/01/1970', () => {
    const result = FULL();
    assert.afterDate(result, new Date(1970, 0, 1));
  });

  it('Should test if returned value is before 31/12/2030', () => {
    const result = FULL();
    assert.beforeDate(result, new Date(2030, 11, 31));
  });
});
