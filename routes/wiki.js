const express = require("express");
const router = express.Router();
const { addPage, editPage, main, userList, userPages, wikiPage } = require("../views");
const { Page, User } = require("../models");

module.exports = router;

//localhost:3000/wiki
router.get("/", (req, res, next) => {

});

router.post("/", async (req, res, next) => {
  const page = new Page(req.body);

  try {
    await page.save();
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

// wiki/add
router.get("/add", (req, res, next) => {
  res.send(addPage());
});
