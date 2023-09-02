// Yudi ingin menarik uang sebanyak X rupiah dari ATM. Mesin ATM hanya akan menerima transaksi jika X kelipatan 5 dan saldo rekening Yudi memiliki cukup uang untuk melakukan transaksi penarikan (termasuk biaya bank). Untuk setiap penarikan yang berhasil, bank mengenakan biaya 0,5 rupiah.
// Diberikan X adalah uang yang ingin yudi tarik dan Y adalah jumlah uang dalam rekening Yudi. Ayo hitung saldo akun Yudi setelah melakukan transaksi!

// Petunjuk
// Cukup lakukan operasi aritmatika biasa.

function solution(x, y) {
    //1. Periksa apakah X kelipatan 5 dan y lebih besar dari X
    if (x % 5 === 0 && y > x) {
        //2. Maka lakukan perhitungan saldo - (jumlah uang yang ditarik + biaya admin Bank) 
        // lalu di masukan ke dalam variabel y
        y -= (x + 0.5);
    }

    return y;
}

console.log(solution(30, 20)); // expected output 89.5
console.log(solution(42, 100)); // expected output 100