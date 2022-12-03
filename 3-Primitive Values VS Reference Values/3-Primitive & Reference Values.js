const hobbies = ["Playing", "Programming"];

hobbies.push("Reading Books");

console.log(hobbies);

const work = hobbies;

work.push("Web Development");

console.log(hobbies);
console.log(work);

const person = {
  age: 32,
};

console.log(person);

function getAdultYears(persons) {
  persons.age -= 18;
  return persons.age;

  // Alternative and the orignal value will not change.
  //   return persons.age - 18;
}

// console.log(getAdultYears({ age: person.age }));
// Alternative
console.log(getAdultYears({ ...person })); //Spread Operator doesn't change orignal Value.

console.log(person);

console.log(getAdultYears(person));
