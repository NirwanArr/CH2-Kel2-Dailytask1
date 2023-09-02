const numbers = [];

for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

const fizzBuzz = (numbers) => {
    const result = [];
    numbers.forEach(number => {
        if (number % 3 === 0 && number % 5 === 0) {
            console.log('FizzBuzz');
            result.push('FizzBuzz');
        } else if (number % 3 === 0) {
            console.log('Fizz');
            result.push('Fizz');
        } else if (number % 5 === 0) {
            console.log('Buzz');
            result.push('Buzz');
        } else {
            console.log(number);
            result.push(number);
        }
    });
    return result;
}

fizzBuzz(numbers);