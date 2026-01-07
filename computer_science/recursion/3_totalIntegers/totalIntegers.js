const totalIntegers = function (obj) {
  let total = 0;

  if (typeof obj !== 'object' || obj === null) return undefined;

  for (const prop of Object.values(obj)) {
    if (Number.isInteger(prop)) total++;
    if (typeof prop === "object" && prop !== null) total += totalIntegers(prop); 
  }
  
  return total;
};

totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]); // returns 7
totalIntegers({ a: 1, b: { a: [5, 10], b: 11 } }); // returns 4

// Do not edit below this line
module.exports = totalIntegers;
