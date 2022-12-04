const fs = require("fs");

async function readData() {
  let fileData;
   fileData = await fs.readFile("data.txt", function (fileData) {
    console.log("FIle Parsing Done");
    console.log(fileData.toString());
  })
    .then(function () {
      console.log("Hi");
    })
    .catch((error) => console.log(error));

  console.log("Hi There!");
}

readData();
