var router = require("express").Router();
var userService = require("../Services/UserService")
var Cookies = require("js-cookie")

router.post("/Register", async (request, response) => await userService.Register(request, response));

router.post("/Login", async (request, response) => await userService.Login(request, response));

router.post("/Logout", async (request, response) => await userService.LogOut(request, response));

router.get("/Verify", async (request, response) => await userService.Verify(request, response));

module.exports = router;