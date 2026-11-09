const {writeFile} = require("fs");
const path = require("path")
let filepath = path.join(__dirname,"2_filesystem","movie.txt");

writeFile(filepath,"ironman",{
    flag:'a'
},(err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("done");
    }
});
writeFile();