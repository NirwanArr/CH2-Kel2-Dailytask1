
// 1. membuat function fizzBuzz
const fizzBuzz = () => {
    // 2. membuat array untuk menampung hasil
    const result = [];

    // 3. melakukan perulangan 1 sampai 100
    for (let i = 1; i <= 100; i++) {
        // 4. mengecek apakah i habis dibagi 3 atau 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
            result.push('FizzBuzz');
        }
        // 5. mengecek apakah i habis dibagi 3
        else if (i % 3 === 0) {
            console.log('Fizz');
            result.push('Fizz');
        }
        // 6. mengecek apakah i habis dibagi 5
        else if (i % 5 === 0) {
            console.log('Buzz');
            result.push('Buzz');
        }
        // 7. jika i tidak habis dibagi 3 atau 5 maka masuk ke sini
        else {
            console.log(i);
            result.push(i);
        }
    }

    // 8. mengembalikan hasil
    return result;
}

// 9. menampilkan hasil
fizzBuzz();