let celcius;
let kelvin;
let fahrenheit;
function convertTemperatureToCelcius(kelvin, fahrenheit) {

    const kelvinToCelcius = (kelvin - 273).toFixed(2);
    const fahrenheitToCelcius = (5/9 * (fahrenheit - 32)).toFixed(2);

    if ((kelvin <= 0 || kelvin >= 0) && (fahrenheit <= 0 || fahrenheit >= 0)) {
        console.log(`Celcius when kelvin is ${kelvin} = ${kelvinToCelcius} and fahrenheit is ${fahrenheit} = ${fahrenheitToCelcius}.`);
    }else {
        console.log(`not possible`);
    }
}

function convertTemperatureToKelvin(celcius, fahrenheit) {

    const celciusToKelvin = (celcius + 273).toFixed(2);
    const fahrenheitToKelvin = (5/9 * (fahrenheit - 32) + 273).toFixed(2);

    if ((celcius <= 0 || celcius >= 0) && (fahrenheit <=0 || fahrenheit >=0)) {
        console.log(`kelvin when celcius is ${celcius} = ${celciusToKelvin} and fahrenheit is ${fahrenheit} = ${fahrenheitToKelvin}.`);
    }else {
        console.log(`not possible`);
    }
}

function convertTemperatureToFahrenheit(celcius, kelvin) {

    const celciustoFahrenheit = ((celcius * 9/5) + 32).toFixed(2);
    const kelvinToFahrenheit = (9/5 * (kelvin - 273) + 32).toFixed(2);

    if ((celcius <= 0 || celcius >= 0) && (kelvin <=0 || kelvin >=0)) {
        console.log(`Fahrenheit when celcius is ${celcius} = ${celciustoFahrenheit} and kelvin is ${kelvin} = ${kelvinToFahrenheit}.`);
    }else {
        console.log(`not possible`);
    }
}