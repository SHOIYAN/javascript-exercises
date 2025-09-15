const fibonacci = function(index) {
  index = Number(index);
  if (index < 0) return "OOPS"; // handle negatives
  if (index === 0 ) return 0;
  if (index === 1) return 1;

  let a = 0, b = 1;
  for (let i = 2; i <= index; i++) {
    let next = a + b;
    a = b;
    b = next;
  }
  return b;
};



// Do not edit below this line
module.exports = fibonacci;
