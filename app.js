const express = require("express");
const app = express();
const Razorpay = require("razorpay");
const bodyParser = require('body-parser')
const crypto = require("crypto");

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



let port = process.env.PORT;
if(port == null || port =="") {
    port = 3000;
}
app.listen(port, () => {
    console.log("server running at port" + port);
})