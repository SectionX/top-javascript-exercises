const removeFromArray = function(arr, ...todelete) {
    let newarr = [];
    let match;
    while (arr.length > 0) {
        match = false
        for (let item of todelete) {
            if (arr[arr.length-1] === item) {
                match = true;
                break;
            }
        }
        if (match) {
            arr.pop();
        } else {
            newarr.push(arr.pop());
        }
    }
    return newarr.reverse();

};

// This program checks the last array element against the arguments for deletion.
// If a match is found, the item is discarded. If not then it's appended to a new
// array.

// As far as I'm aware, push/pop time complexity is O(1) while shift/unshift is O(n)
// so instead of performing multiple O(n) operations, I opted to just reverse the new
// array. I'm not very familiar with JS memory management but since I remove the items
// from the original array, the memory allocation should remain constant.

// Do not edit below this line
module.exports = removeFromArray;
