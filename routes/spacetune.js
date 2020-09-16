const express = require('express');
const spacetuneRouter = express.Router();

spacetuneRouter.get("/", (req, res) => {

  res.render("spacetune");
});

module.exports = spacetuneRouter;
