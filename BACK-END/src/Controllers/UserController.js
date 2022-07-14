var router = require("express").Router();
var userService = require("../Services/UserService")

router.post("/Register", async (request, response) => await userService.Register(request, response));

module.exports = router;