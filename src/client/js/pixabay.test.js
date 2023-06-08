const pixabay = require('./pixabay.js');

test('Testing the function', () => {
    expect(pixabay.getLocationImage).toBeInstanceOf(Function);
})

