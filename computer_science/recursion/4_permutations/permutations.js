const permutations = function(arr) {
  if (arr.length === 0) return [[]];
  
  const result = [];
  
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
    const permsOfRemaining = permutations(remaining);
    
    for (const perm of permsOfRemaining) {
      result.push([current, ...perm]);
    }
  }
  
  return result;
};
  
// Do not edit below this line
module.exports = permutations;
