const sumAll = function(num1, num2) {
    if (!(typeof(num1) == "number" && typeof(num2) == "number")) { return "ERROR";}
    if (num1 < 0 || num2 < 0) {return "ERROR"};
    if (num1 == num2) {return max;}

    let min = num1 < num2 ? num1 : num2;
    let max = num1 > num2 ? num1 : num2;


    return ((max-min+1)/2) * (max+min);


};


// Even though the spirit of this lesson is iteration, using so much processing to
// calculate linear sums is a waste, so I will implement this with a mathematical
// approach.

// Do not edit below this line
module.exports = sumAll;
