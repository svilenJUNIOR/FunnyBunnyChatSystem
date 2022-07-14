var router = require("express").Router();

var userControler = require("../Controllers/UserControler")
var bunnyControler = require("../Controllers/BunnyControler")

router.use("/User", userControler);
router.use("/Bunny", bunnyControler);

module.exports = router;