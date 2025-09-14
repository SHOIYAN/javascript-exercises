const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((acc, num) => {
    acc += num;
    return acc;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, num) => {
    acc *= num;
    return acc;
  }, 1);
};

const power = function (num, power) {
  return num ** power;
};

const factorial = function (num) {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
