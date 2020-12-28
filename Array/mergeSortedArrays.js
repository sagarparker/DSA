const array1 = [0,3,4,3]
const array2 = [10,11,30]

function mergeSortedArrays(arr1,arr2){
    var mergedArray = [];
    var array1 = arr1;
    var array2 = arr2;
    mergedArray = array1.concat(array2);
    console.log(mergedArray.sort(function(a, b){return a - b}));
}

mergeSortedArrays(array1,array2);