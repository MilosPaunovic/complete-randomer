const chai = require('chai');
chai.use(require('chai-datetime'));

const { assert } = chai;
const { PAST } = require('../../modules/date');

describe('PAST()', () => {
  it('Should throw TypeError for containing parameters', () => {
    assert.throw(() => { PAST(true); }, TypeError, '0 parameter(s) allowed');
  });

  it('Should test if returned value is after 01/01/1970', () => {
    const result = PAST();
    assert.afterDate(result, new Date(1970, 0, 1));
  });

  it('Should test if returned value is before current date', () => {
    const result = PAST();
    assert.beforeDate(result, new Date(Date.now()));
  });
});
