let celsius = 0;
let Fahrenheit = 0;
let kelvin = 0;

function celsiusToFahrenheit(celsius) {
    return celsius * 9/5 + 32;
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
function celsiusToKelvin(celsius){
    return celsius + 273.15;
}
function kelvinToCelcius(kelvin){
    return kelvin - 273.15;
}

  console.log(celsiusToFahrenheit(25)); // Should print 77
  console.log(fahrenheitToCelsius(77)); // Should print 25
  console.log(celsiusToKelvin(33))
  console.log(kelvinToCelcius(55))

