function convertTemperatureToCelcius(kelvin, fahrenheit) {

    const kelvinToCelcius = (kelvin - 273).toFixed(2);
    const fahrenheitToCelcius = (5/9 * (fahrenheit - 32)).toFixed(2);

    console.log(`Celcius when kelvin is ${kelvin} = ${kelvinToCelcius} and fahrenheit is ${fahrenheit} = ${fahrenheitToCelcius}.`);
}

function convertTemperatureToKelvin(celcius, fahrenheit) {

    const celciusToKelvin = (celcius + 273).toFixed(2);
    const fahrenheitToKelvin = (5/9 * (fahrenheit - 32) + 273).toFixed(2);

    console.log(`kelvin when celcius is ${celcius} = ${celciusToKelvin} and fahrenheit is ${fahrenheit} = ${fahrenheitToKelvin}.`);
}

function convertTemperatureToFahrenheit(celcius, kelvin) {

    const celciustoFahrenheit = ((celcius * 9/5) + 32).toFixed(2);
    const kelvinToFahrenheit = (9/5 * (kelvin - 273) + 32).toFixed(2);

    console.log(`Fahrenheit when celcius is ${celcius} = ${celciustoFahrenheit} and kelvin is ${kelvin} = ${kelvinToFahrenheit}.`);
}