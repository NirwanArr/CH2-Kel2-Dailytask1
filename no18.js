// Diberikan sebuah string alamat IP yang valid. Untuk setiap tanda . pada alamat IP gantilah menjadi tanda ()

// Petunjuk
// Loop string tersebut dan replace simbol yang di maksud.

function solution(str) {
    // tulis jawabanmu disini
    let result = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.') {
            result += '()';
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(solution("1.1.1.1")) // expected output 1()1()1()1()
console.log(solution("192.168.1.1")) // expected output 192()268()1()1()