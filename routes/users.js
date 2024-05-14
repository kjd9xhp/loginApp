var express = require("express");
var router = express.Router();
var user = require("../controllers/user");

router.get("/", function (req, res) {
  res.send("respond with a resource");
});

router.get("/test", user.all);

module.exports = router;
