

function findFactorialOfNumber(number){
    if(number === 1) {
        return 1;
    }
    return number*findFactorialOfNumber(number-1);
}



console.log(findFactorialOfNumber(5));
