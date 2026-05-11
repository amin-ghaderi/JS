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