const express = require("express");
const app = express();

// you can optionally use handlebars
app.set("view engine", "ejs");
app.use(express.static("public")); //access images, css, js

// enable use of json
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.get("/", function(req, res){

    res.render("index");

} );

app.post("/", function(req, res){

    res.json({
        
       answers: [
           {
             question: 1,
             correct: "sacramento"
           }
           ],
       original: req.body 
    });

} );

// app.listen("8081", "127.0.0.1", function() {
//     console.log("Express server is running...");
// });

// running server jasons server
// app.listen(process.env.PORT || 3000, process.env.IP, function(){
//     console.log("Express server is running...");
// });

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});
