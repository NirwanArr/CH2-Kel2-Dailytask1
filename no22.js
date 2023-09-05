// Buat sebuah function yang bisa melakukan fungsi dari fibonacci number di dalam kode Javascript.
// Bisa diskusi dengan teman kelompokmu ya!

// membuat fungsi
const fibonacciNumber = () => {
  // membuat array kosong
  const fiboNum = [];
  // menetapkan nilai variable no1
  let no1 = 0;
  // menetapkan nilai variable no2
  let no2 = 1;
  // menetapkan nilai variable hasil
  let no3 = 0;

  // melakukan looping dengan batas kurang dari 15
  for (let i = 0; i < 15; i++) {
    //   penjumlahkan no1 dan no2 menjadi nilai no3
    no3 = no1 + no2; //hasil = 0+1=1|| iterasi kedua hasil = 1+1=2 , dan seterusnya
    no1 = no2; // nilai no1 menjadi no2, no1 = 1 ||iterasi kedua no1 = 1 , dan seterusnya

    no2 = no3; // nilai no2 menjadi nilai penjumlahan no3, no2 = 0+1=1
    //iterasi kedua, no2 = 1+1=2, dan seterusnya

    fiboNum.push(no2); //menambahkan hasil loop no2 kedalam array fiboNum
  }
  // mengembalikan nilai array fiboNum
  return fiboNum;
};
// mengeprint fungsi fibonacciNumber
console.log(fibonacciNumber());
