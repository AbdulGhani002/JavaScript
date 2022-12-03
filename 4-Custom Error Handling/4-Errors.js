const fs = require("fs");

function readFile() {
  try {
    const fileData = fs.readFileSync("data.js");
  } catch {
    console.log("Hi There!");
  } finally {
    console.log("Output of finally!");
  }
}

readFile();
