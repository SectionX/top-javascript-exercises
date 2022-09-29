const fibonacci = function(n, memo = {}) {
    if (memo[+n]) return memo[+n];
    if (+n < 0) {
        return "OOPS"
    } 
    if (+n <= 2) {
        return 1;
    }
    memo[+n] = fibonacci(+n-2, memo) + fibonacci(+n-1, memo);
    return memo[n];


};

// Do not edit below this line
module.exports = fibonacci;
