var express = require("express");
var app = express();
var Razorpay = require("razorpay");
var bodyParser = require('body-parser')
var crypto = require("crypto");


let instance = new Razorpay({
    key_id: 'rzp_test_uf3sjftXUE3AjG', // your `KEY_ID`
    key_secret: 'RSdOmmzgbOHeCOvbBoaaJ9nR' // your `KEY_SECRET`
})

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get("/", (req, res) => {

    res.render("index");
})

app.post("/", (req, res) => {
    
    res.sendFile(__dirname + "/donate.html");

});

app.get("/about" , (req,res) => {
    res.render("about");
});

app.get("/contact" , (req,res) => {
    res.render("contact");
});

app.post("/contact" , (req,res) => {
    res.redirect("/contact");
});

app.get("/:pageName", (req,res)=> {
    
    let pageName = req.params.pageName; 
    
    if(pageName!= "about" || pageName!="contact") {
        res.render("error");
    }
})




app.listen("3000", () => {
    console.log("server running at port 3000");
})