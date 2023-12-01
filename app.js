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
app.get("/about",function(req,res){
    res.render("about");
})

app.get("/contact",function(req,res){
    res.render("contact");
})





app.use(bodyParser.urlencoded({extended: true}));

// to use external css file
app.use(express.static("public"));

const port=process.env.PORT|| 3000;
app.listen(port , function () {
    console.log(`Server started on port ${port}`);
  })