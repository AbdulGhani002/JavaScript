function greetUser(greetingPrefix,user = "User") {
  return `${greetingPrefix} ${user}!`;
}

console.log(greetUser('Hello'));
console.log(greetUser('Hi','Abdul Ghani'));
console.log(greetUser('Abdul Ghani'));
