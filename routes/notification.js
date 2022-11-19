var express = require("express");
var router = express.Router();

/* POST curra connector notification */
router.post("/notifications", async function (req, res, next) {
  if (req.body.value === "0" || !req.body.toAddress.owned) {
    res.status(200).send();
    return;
  }
  console.log("-----NOTIFICATION------");
  console.log(req.body);
  // your logic goes above. for example: increse user balance
  res.status(200).send();
});

module.exports = router;
