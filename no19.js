// Diberikan sebuah angka n, jumlahkanlah masing - masing digit pada angka tersebut.

// Petunjuk
// Gunakan operator modulus untuk mengambil setiap digit dari angka tersebut

// membuat function solution dengan parameter n
function solution(n) {
  // lalu membuat variabel
  let nString = n.toString();
  let num = 0;
  //   membuat perloopingan dengan menggunakan for
  for (let i = 0; i < nString.length; i++) {
    // merubah data string dengan menggunakan parseint untuk mendapatkan nilai number
    num += parseInt(nString[i]);
  }
  return num;
}

// memanggil function solution dengan parameter input numbernya 2022(nilai tertentu)
console.log(solution(2022)); // expected output 6
console.log(solution(1001)); // expected output 2
