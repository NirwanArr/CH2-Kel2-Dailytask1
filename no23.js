// Ada sebuah potongan array seperti di bawah.

// Buatlah perhitungan untuk menentukan dari nilai kelulusan dari siswa dengan aturan:
// Nilai di bawah 50 maka tidak lulus
// Nilai di atas 50 dan di bawah 70 maka remedial
// Nilai di atas 70 maka lulus

// Bisa diskusi dengan kelompokmu ya!

const students = [
  { name: "Peter", score: 30},
  { name: "Parker", score: 50},
  { name: "Harry", score: 70},
  { name: "Eva", score: 79},
  { name: "Justin", score: 60},
  { name: "Bieber", score: 90},
  { name: "Evan", score: 55},
  { name: "Rowling", score: 90}
]

// 1. Buat Fungsi Check Status Score
function cekstatus (students){

// 2. Buat Array untuk menampung Hasil
  let result = []
  // 3. Buat Kondisi Status
  let status ;

 // 3. Lakukan perulangan pada data Students
  students.forEach(user =>{
    //4. Buat Kondisi dimana nilai dibawah 50 maka tidak lulus
    if(user.score < 50){
      status = 'Tidak Lulus'
          //5. Buat Kondisi dimana nilai di atas 50 dan di bawah 70 maka remedial
    }else if(user.score >= 50 && user.score < 70){
      status = 'Remedial'
       //6. Buat Kondisi dimana nilai diatas 70 maka  lulus
    }else if(user.score >= 70){
      status = 'Lulus'
    }
    // 5. Puseh nama students dan status ke dalam array 
    result.push({name:user.name,status:status})
  })
  console.log(result)
  return result
}

cekstatus(students)