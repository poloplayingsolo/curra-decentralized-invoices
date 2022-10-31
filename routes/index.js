var express = require("express");

var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  res.render("index", {
    address: await req.curra.getNextAddress(),
  });
});

module.exports = router;
