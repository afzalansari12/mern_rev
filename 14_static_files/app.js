const express = require("express");
const app = express();
const path = require("path")
app.get("/",(req,res)=>{
    res.send("<div style='color:red'>hello</div>");
});

app.use("/",express.static(path.join(__dirname,"public")));
  
app.listen(4444,()=>{
    console.log("running port 4444")
});

