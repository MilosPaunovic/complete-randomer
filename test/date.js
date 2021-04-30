const chai = require('chai');
chai.use(require('chai-datetime'));

const { assert } = chai;
const { FULL, PAST, FUTURE } = require('../modules/date');

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
