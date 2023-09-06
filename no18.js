// Diberikan sebuah string alamat IP yang valid. Untuk setiap tanda . pada alamat IP gantilah menjadi tanda ()

// Petunjuk
// Loop string tersebut dan replace simbol yang di maksud.

function solution(str) {
    // tulis jawabanmu disini

    // membuat variabel untuk menampung hasil
    let result = ""

    // melakukan perulangan terhadap setiap karakter str
    for (let i = 0; i < str.length; i++) {

        // jika karakter str pada index i = '.' maka result ditambahkan '()'
        if (str[i] === '.') {
            result += '()';
        }
        // jika tidak maka akan ditambahkan biasa
        else {
            result += str[i];
        }
    }
    return result;
}

// menampilkan hasil
console.log(solution("1.1.1.1")) // expected output 1()1()1()1()
console.log(solution("192.168.1.1")) // expected output 192()268()1()1()