const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// 0 1
// 1 2
// 2 3
// 3 4
// 4 5
// 5 6
// 6 7
// 7 8
// 8 9
// 9 10

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j]>array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

console.log(bubbleSort(numbers));