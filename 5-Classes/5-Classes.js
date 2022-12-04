class Job {
  //First letter of class-name should be capitalized.
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.place = place;
    this.salary = salary;
  }
}

const developer = new Job("Web Developer", "Pakistan", 60000);
const cok = new Job("Cook", "New York", 600000);
