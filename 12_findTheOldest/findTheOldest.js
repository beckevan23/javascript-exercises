const findTheOldest = function(array) {
    for (let object in array) {
        if (!array[object].yearOfDeath) {
            array[object].yearOfDeath = new Date().getFullYear();
        }
    }
    const oldest = array.sort(function(a, b) {
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
    })
    return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
