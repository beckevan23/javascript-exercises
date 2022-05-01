const sumAll = function(one, two) {
    let finalSum = 0;
    if (one < 0 || two < 0 || typeof one != "number" || typeof two != "number") {
        return "ERROR";
    } else if (one > 0 && two > 0 && one < two) {
        for (let i = one; i < two + 1; ++i) {
           finalSum += i;
        } return finalSum;  
    } else if (one > 0 && two > 0 && one > two) {
        for (i = two; i < one + 1; ++i) {
            finalSum += i;
        } return finalSum;
    };
};

// Do not edit below this line
module.exports = sumAll;
