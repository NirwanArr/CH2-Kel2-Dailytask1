// Nilai ujian mahasiswa dikategorikan sebagai berikut :
// - A : 91 - 100
// - B : 81 - 90
// - C : 71 - 80
// - D : 61 - 70
// - E : <= 60\
// Diberikan sebuah nilai ujian, tentukan kategori dari nilai tersebut

// Petunjuk
// Check input dan cocokan dengan kategori yang telah dibuat.

// 1. membuat funcion solution
function solution(n) {
    // tulis jawabanmu disini
    //2. membuat kondisi apa bila nilai 91-100 
    if (n <= 100 && n > 90) {
        //3. jalankan A
        return 'A';
        //4. membuat kondisi apa bila nilai 81-90 
    } else if (n <= 90 && n > 80) {
        //5. jalankan B
        return 'B';
         //5. membuat kondisi apa bila nilai 71-80 
    } else if (n <= 80 && n > 70) {
        //6. jalankan C
        return 'C';
         //7. membuat kondisi apa bila nilai 61-70 
    } else if (n <= 70 && n >= 60) {
        //8. jalankan D
        return 'D';
         //9. membuat kondisi apa bila nilai dibawah 60
    } else if (n <= 60) {
            //10. Jalankan E
        return 'E';
    } else {
        // 11 jalankan apa bila tidak ada inputan
        return 'invalid input';
    }
}

console.log(solution(95)); // expected output A
console.log(solution(76)); // expected output C