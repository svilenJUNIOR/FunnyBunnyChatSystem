var router = require("express").Router();

var userControler = require("./Controllers/UserController")
// var bunnyControler = require("./Controllers/BunnyController")

router.use("/User", userControler);
// router.use("/Bunny", bunnyControler);

module.exports = router;