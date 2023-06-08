const dateChecker = require('./dateChecker.js');

const dateValueFuture = 33295374245000

test('Testing isDateInRange', () => {
    expect(dateChecker.isDateInRange(dateValueFuture)).toBe(false)
});

