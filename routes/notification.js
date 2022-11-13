var express = require("express");
var router = express.Router();

/* POST curra connector notification */
router.post("/notifications", async function (req, res, next) {
  console.log("-----NOTIFICATION------");
  console.log("Value:", req.body.value);
  console.log("From address:", req.body.fromAddress.value);
  console.log("Tx hash:", req.body.txHash);
  console.log("Token:", req.body.token);
  // your logic goes above. for example: increse user balance
  res.end();
});

module.exports = router;
