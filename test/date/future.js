const chai = require('chai');
chai.use(require('chai-datetime'));

const { assert } = chai;
const { FUTURE } = require('../../modules/date');

describe('FUTURE()', () => {
  it('Should throw TypeError for containing parameters', () => {
    assert.throw(() => { FUTURE(true); }, TypeError, '0 parameter(s) allowed');
  });

  it('Should test if returned value is after current date', () => {
    const result = FUTURE();
    assert.afterDate(result, new Date(Date.now()));
  });

  it('Should test if returned value is before 31/12/2030', () => {
    const result = FUTURE();
    assert.beforeDate(result, new Date(2030, 11, 31));
  });
});
