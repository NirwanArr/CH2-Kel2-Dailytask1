const sortAscending = (array) => {
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped === true);
    return array;
}

const sortDescending = (array) => {
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < array.length; i++) {
            if (array[i] < array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped === true);
    return array;
}

const array1 = [5, 1, 3, 6, 2, 7, 4, 4, 9, 2, 9, 1];
console.log(sortAscending(array1));
console.log(sortDescending(array1));