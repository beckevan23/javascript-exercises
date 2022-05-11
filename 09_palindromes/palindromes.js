const palindromes = function (string) {
    let newString = string.replace(/[^\w\']|_/g, "")
                          .replace(/\s+/g, " "); 
    let array = newString.split('');
    let reversed = array.reverse();
    let joined = reversed.join('');
    return newString.toLowerCase() == joined.toLowerCase() ? true : false;    
};

// Do not edit below this line
module.exports = palindromes;
