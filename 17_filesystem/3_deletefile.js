const { unlink } = require("fs");
const path = require("path");

let filepath = path.join(__dirname, "2_filesystem", "movie.txt");

unlink(filepath, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("File deleted successfully");
    }
});