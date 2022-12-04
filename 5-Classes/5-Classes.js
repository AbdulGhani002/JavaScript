class Job {
  //First letter of class-name should be capitalized.
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }
  // We can define methods for our classes like Date has a method of toISOString().
  describe() {
    return `I am a ${this.title}, I work in ${this.location}, I earns $${this.salary} per anum.`;
  }
}

const developer = new Job("Web Developer", "Pakistan", 60000);

const cook = new Job("Cook", "New York", 600000);

console.log(developer);

console.log(cook);

console.log(developer.describe());

console.log(cook.describe());
