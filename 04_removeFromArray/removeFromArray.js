const removeFromArray = function(array, num1, num2, num3, num4) {
    for (let i = array.length -1; i >= 0; i--) {
        if (array[i] === num1) {
            array.splice(i, 1);
        } else if (array[i] === num2) {
            array.splice(i, 1);
        } else if (array[i] === num3) {
            array.splice(i, 1);
        } else if (array[i] === num4) {
            array.splice(i, 1);
        };
    };
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
