function filterEvenNumbers(numbers) {

    let result = [];

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] % 2 !== 0) {
            result.push(numbers[i]);
        }
    }

    return result;
}

let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(filterEvenNumbers(myNumbers));

function celsiusToFahrenheit(celsius) {

    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {

    return (fahrenheit - 32) * 5 / 9;
}

console.log("50°C is " + celsiusToFahrenheit(50) + "°F");

console.log("78°F is " + fahrenheitToCelsius(78).toFixed(3) + "°C");