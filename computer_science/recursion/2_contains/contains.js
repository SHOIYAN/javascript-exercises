const contains = function (obj, searchValue) {
  for (const value of Object.values(obj)) {
    if (Number.isNaN(searchValue) && Number.isNaN(value)) {
      return true;
    }
    if (value === searchValue) return true;

    if (typeof value === "object" && value !== null) {
      if (contains(value, searchValue)) return true;
    }
  }
  return false;
};
// Do not edit below this line
module.exports = contains;
