var express = require("express");
var router = express.Router();

/* POST curra connector notification */
router.post("/notifications", async function (req, res, next) {
  const transfer = req.body;
  if (
    !req.curra.isIncomingTransfer(transfer) ||
    !req.curra.isNonZeroTransfer(transfer)
  ) {
    res.status(200).send();
    return;
  }
  console.log("-----NOTIFICATION------");
  console.log(transfer);
  // your logic goes above. for example: increse user balance
  res.status(200).send();
});

module.exports = router;
