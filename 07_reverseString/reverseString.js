const reverseString = function(string) {
    const reversed = [...string].reverse().join('');
    return reversed;
};

reverseString ('hello me');
// Do not edit below this line
module.exports = reverseString;
