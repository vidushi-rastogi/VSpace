const express = require('express');
const spacegameRouter = express.Router();

spacegameRouter.get("/", (req, res) => {

  res.render("spacegame");
});

module.exports = spacegameRouter;
