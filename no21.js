// Buatlah sebuah function untuk melakukan format sorting array di dalam kode Javascript. 
// Bisa diskusi dengan teman kelompokmu ya!
const sortAscending = (array) => {
    let swapped;

    do {
        // 1. Set variable swapped ke false sebagai nilai awal
        swapped = false;
        // 2. Melakukan perulangan sebanyak panjang array
        for (let i = 0; i < array.length; i++) {
            // 3. Mengecek apakah array[i] lebih besar daripada array[i+1]
            if (array[i] > array[i + 1]) {
                // 4. Melakukan swap nilai array[i] dengan index setelahnya jika nilai array[i] lebih besar dari array[i+1]
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                // 5. Set nilai swapped ke true agar bisa melakukan pengecekan selanjutnya
                swapped = true;
            }
        }
    } while (swapped === true); // 6. jika nilai swapped true, maka akan melakukan perulangan lagi hingga nilai array[i] tidak lebih besar dari nilai array[i+1]
    return array;
}

const sortDescending = (array) => {
    let swapped;

    do {
        // Set variable swapped ke false sebagai nilai awal
        swapped = false;
        // Melakukan perulangan sebanyak panjang array
        for (let i = 0; i < array.length; i++) {
            // Mengecek apakah array[i] lebih kecil daripada array[i+1]
            if (array[i] < array[i + 1]) {
                // Melakukan swap nilai array[i] dengan index setelahnya jika nilai array[i] lebih kecil dari array[i+1]
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                // Set nilai swapped ke true agar bisa melakukan pengecekan selanjutnya
                swapped = true;
            }
        }
    } while (swapped === true); // 6. jika nilai swapped true, maka akan melakukan perulangan lagi hingga nilai array[i] tidak lebih kecil dari nilai array[i+1]
    return array;
}

const array1 = [5, 1, 3, 6, 2, 7, 4, 4, 9, 2, 9, 1];
console.log(sortAscending(array1));
console.log(sortDescending(array1));