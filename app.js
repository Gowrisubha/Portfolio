const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var _ = require("lodash");
const mongoose=require('mongoose');
const app = express();
var path = require('path');
app.set('view engine', 'ejs');


app.get("/",function(req,res){
    res.render("home");
})
app.listen("3000", ()=>{
    console.log("server running in port 3000")
})



app.use(bodyParser.urlencoded({extended: true}));

// to use external css file
app.use(express.static("public"));
