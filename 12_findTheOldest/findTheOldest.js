const now = (new Date).getFullYear();

const findTheOldest = function(arr) {
    return arr.reduce((max,item) => {
        if (!item.yearOfDeath) item['yearOfDeath'] = now;
        if (!max.name) max = item;
        const maxdif = max.yearOfDeath - max.yearOfBirth;
        const nextdif = item.yearOfDeath - item.yearOfBirth;
        return max = nextdif > maxdif ? item : max;
    }, {});
};


// Do not edit below this line
module.exports = findTheOldest;
