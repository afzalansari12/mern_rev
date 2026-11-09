const { writeFile } = require("fs");
const path = require("path");

let filepath = path.join(__dirname,"result.txt");

writeFile(filepath, "ironman", (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("File created successfully");
    }
});