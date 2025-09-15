const findTheOldest = function (people) {
  // get greatest age
  const age = people.reduce((acc, person) => {
    person.yearOfDeath = person.yearOfDeath || new Date().getFullYear();
    let age = person.yearOfDeath - person.yearOfBirth;
    if (age > acc) {
      acc = age;
    }
    return acc;
  }, 0);
  // get person's object matching the age
  const obj = people.find(
    (person) => person.yearOfDeath - person.yearOfBirth === age
  );
  // return the obj
  return obj;
};

// Do not edit below this line
module.exports = findTheOldest;
