const sumAll = function (num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  }
  if (num1 < 1 || num2 < 1) {
    return "ERROR";
  }

  let sum = 0;
  let start = Math.min(num1, num2);
  let end = Math.max(num1, num2);

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
};

console.log(sumAll(1, 4)); // 10
console.log(sumAll(4, 1)); // 10
console.log(sumAll(-5, 10)); // "ERROR"
console.log(sumAll("3", 5)); // "ERROR"


// Do not edit below this line
module.exports = sumAll;
