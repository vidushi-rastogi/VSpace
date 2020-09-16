const express = require('express');
const aboutmeRouter = express.Router();

aboutmeRouter.get("/", (req, res) => {

  res.render("AboutMe");
});

module.exports = aboutmeRouter;
