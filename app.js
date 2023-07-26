//settung server using nodejs
// const http= require("http");
// const gfname = require('./features')

//after changing type=import in pakage.json
/*import http from "http"
// import gfname,{ gfname1,gfname2 } from "./features.js";
 /*import * as myObj from "./features.js";
 import fs from "fs";  //read any file with this help
 import path from "path";
  console.log(path.extname("/home/random/index.js"))
  console.log(path.dirname("/home/random/index.js")) //path ko breakdown krta hai 
//console.log(myObj.gfname2)
//routing of server in nodejs ( or api endpoint when we integrate db with it)
const server = http.createServer((req,res)=>{
    console.log(req.method);
    if(req.url==="/about"){
        res.end("<h1>about</h1>")
    }
    else if(req.url==="/"){
        fs.readFile("./index.html",(err,home)=>{    //html file to /home route ke ander dikhane ke liye  vese backend me us route ke cheejo ko process krne ke liye
            res.end('home');
         })
    }
    else if(req.url==="/contact"){
        res.end("<h1>Contact Page</h1>")
    }
    else{
        res.end("<h1>page not found </h1>")

    }
});

server.listen(5000,()=>{
    console.log("Server is Working")
})
*/
//express js


const express = require('express')
const  app =express()
const connection =require('./config/db')


// connect db
connection.connect();
console.log("db connected")


//routes
const  UserRoutes= require('./Routes/UserRoutes')
app.use('/' , UserRoutes)


module.exports=app

