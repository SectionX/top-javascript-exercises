const palindromes = function (str) {
    str = str.replaceAll(/\W/g, "").toLowerCase();
    len = str.length >> 1;
    for (let i = 0; i < len; i++) {
        if (str.charAt(i) != str.charAt(str.length-1-i)) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
