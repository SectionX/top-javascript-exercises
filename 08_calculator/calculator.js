const add = function() {
	return Array.from(arguments).reduce((sum,n) => {
    return sum + +n
  }, 0)
};

const subtract = function(a,b) {
    return a - b
};

const sum = function(a) {
  return Array.from(a).reduce((sum,n) => {
    return sum + n
  }, 0)
};

const multiply = function(a) {
  return Array.from(a).reduce((prod,n) => {
    return prod * n
  }, 1)
};

const power = function(a, b) {
  result = 1
  while (b > 0) {
    if (b & 1 == 1) {
      result = result * a
    }
      a = a * a 
    
    b >>= 1
  } 
	return result;
};

const factorial = function(a) {
  if (a == 0) return 1;
	return a * factorial(a-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
