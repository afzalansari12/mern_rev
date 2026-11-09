// const {writeFile} = require("fs");
// const path = require("path")
// let filepath = path.join(__dirname,"2_filesystem","a.txt","b.txt");

// writeFile(filepath,"a.txt","b.txt",(err)=>{
//     if(err){
//         console.log(err.message);
//     }else{
//         console.log("done",data.toString);
//     }
// });
// writeFile();



const { readFile, writeFile } = require("fs");
const path = require("path");

let file1 = path.join(__dirname, "a.txt");
let file2 = path.join(__dirname, "b.txt");
let result = path.join(__dirname, "result.txt");

readFile(file1, "utf-8", (err, data1) => {
    if (err) {
        console.log(err.message);
    } else {

        

    }
});
