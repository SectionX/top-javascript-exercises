const leapYears = function(year) {
    if (typeof(year) != 'number') {return "ERROR";}
    return year % 100 == 0 ? year % 400 == 0 : year % 4 == 0;
};

// If the year is divisible by 100 then it has to be divisible by 400
// If it's not then it has to be divisible by 4

// Do not edit below this line
module.exports = leapYears;
