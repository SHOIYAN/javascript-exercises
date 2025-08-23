function removeFromArray(arr, ...nums) {
  return arr.filter(item => !nums.includes(item));
}

console.log(removeFromArray([1, 2, 2, 3, 4, 5], 2, 3)); 
// → [1, 4, 5]

// → [1, 4]

// Do not edit below this line
module.exports = removeFromArray;
