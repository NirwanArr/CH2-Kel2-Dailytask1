// Diberikan sebuah angka n, jumlahkanlah masing - masing digit pada angka tersebut.

// Petunjuk
// Gunakan operator modulus untuk mengambil setiap digit dari angka tersebut

function solution(n) {
    // tulis jawabanmu disini
    let nString = n.toString();
    let num = 0;
    for (let i = 0; i < nString.length; i++) {
        num += parseInt(nString[i]);
    }
    return num;
}

console.log(solution(2022)) // expected output 6
console.log(solution(1001)) // expected output 2