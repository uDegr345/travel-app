const nominatim = require('./nominatim.js');

test('Testing the function', () => {
    expect(nominatim.getGeolocation).toBeInstanceOf(Function);
})

