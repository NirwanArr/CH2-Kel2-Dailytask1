// Diberikan sebuah string s. Tentukan apakah terdapat karakter `a` dan `b` yang jarak  `a ke b` atau `b ke a` yang memiliki jarak minimal 3 karakter.
// Return "YES" jika ya dan "NO" jika tidak.

// Petunjuk
// Check tiap karakter kemudian check 4 karakter setelahnya.

function solution(str) {
    // tulis jawabanmu disini
    let next = '';
    for (let i = 0; i < str.length; i++) {
        if (next === '') {
            if (str[i] === 'a') {
                next = 'b';
                i += 3;
            }
            if (str[i] === 'b') {
                next = 'a'
                i += 3;
            }
        } else {
            if (str[i] === next) {
                return 'YES';
            }
        }
    }
    return 'NO';
}

console.log(solution("acdebae")) // expected output YES
console.log(solution("cdaecba")) // expected output NO