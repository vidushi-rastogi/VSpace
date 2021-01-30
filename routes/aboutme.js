const express = require('express');
const aboutmeRouter = express.Router();
const mongoose = require('mongoose');


//database connectivity
//connecting with mongodb atlas cloud server online
mongoose.connect("mongodb+srv://admin-vidushi:admin123@cluster0.bs1qi.mongodb.net/vspaceDB?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

//REVIEW FORM SCHEMA
const reviewSchema = new mongoose.Schema ({

  name: String,
  email: String,
  optionSelected: String,
  review: String
});

//REVIEW FORM model
const Review = mongoose.model("Review", reviewSchema);

aboutmeRouter.get("/", (req, res) => {

  res.render("AboutMe");
});
aboutmeRouter.post("/reviewForm", (req, res) => {

  const visitorName = req.body.name;
  const visitorEmail = req.body.email;
  const selectedOption = req.body.options;
  const visitorReview = req.body.review;

  const newReview = new Review ({

    name: visitorName,
    email: visitorEmail,
    optionSelected: selectedOption,
    review: visitorReview
  });
  newReview.save();

  res.redirect("/aboutme");
});

module.exports = aboutmeRouter;
