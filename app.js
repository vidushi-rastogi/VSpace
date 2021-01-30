const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();

//routes
const home = require('./routes/home');
const spacetune = require('./routes/spacetune');
const spacegame = require('./routes/spacegame');
const aboutme = require('./routes/aboutme');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));






//mounting routes to link path
app.use("/", home);
app.use("/spacetune", spacetune);
// app.use("/spacetune/spacetune.html", spacetune);
app.use("/spacegame", spacegame);
app.use("/aboutme", aboutme);


app.listen(process.env.PORT || 3000, function () {

  console.log("Server is running on port 3000");
});
