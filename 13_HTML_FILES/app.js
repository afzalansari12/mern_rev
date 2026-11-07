const express = require("express");
const app = express();
const path = require("path")
app.get("/",(req,res)=>{
    res.send("<div style='color:red'>hello</div>");
});

app.get("/file",(req,res)=>{
    let fileDes = path.join(__dirname,"todo.html");
    res.sendFile(fileDes); // send file takes absolute path 
});

app.get("/style.css",(req,res)=>{
    let fileDes = path.join(__dirname,"style.css");
    res.sendFile(fileDes); // send file takes absolute path 
});

app.get("/script.css",(req,res)=>{
    let fileDes = path.join(__dirname,"script.css");
    res.sendFile(fileDes); // send file takes absolute path 
});
app.listen(4444,()=>{
    console.log("running port 4444")
});

