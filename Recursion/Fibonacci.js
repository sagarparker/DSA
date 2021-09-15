// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8



// Iterative approach

function fibonacciIterative(n){
    let arr = [0,1];


    if(n < 2){
        return n;
    }
    
    for(let i = 2;i <= n;i++){
        arr.push(arr[i-2]+arr[i-1]);
    }
    return arr[n];
}
  
console.log(fibonacciIterative(3));
  


// Recursvie Approach

function fibonacciRecursive(n) {
    if(n < 2){
        return n;
    }
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
} 

console.log(fibonacciRecursive(3));



// DP + recursive approach

function fibonacciRecursiveWithDP(){
    let cache = {}
    return function fib(n){
        if(n in cache){
            return cache[n];
        }
        else{
            if(n<2){
                return n;
            }
            else{
                cache[n] = fib(n-1) +fib(n-2);
                return cache[n];
            }
        }
    }
}

const memoize = fibonacciRecursiveWithDP();

console.log(memoize(3));
  
