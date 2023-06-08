const uiHandler = require('./uiHandler.js');

test('Testing the function', () => {
    expect(uiHandler.createTripCard).toBeInstanceOf(Function);
})

