const weatherbit = require('./weatherbit.js');

test('Testing the function', () => {
    expect(weatherbit.getWeatherData).toBeInstanceOf(Function);
})

