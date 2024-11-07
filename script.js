let celsius = 0;
let Fahrenheit = 0;
let kelvin = 0;

function celsiusToFahrenheit(celsius) {
    return celsius * 9/5 + 32;
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

  console.log(celsiusToFahrenheit(25)); // Should print 77
  console.log(fahrenheitToCelsius(77)); // Should print 25
