var router = require("express").Router();
var userService = require("../Services/UserService")

router.post("/Register", async (request, response) => await userService.Register(request, response));

router.post("/Login", async (request, response) => await userService.Login(request, response));

router.post("/Logout", async (request, response) => await userService.LogOut(request, response));

router.get("/ChangeToken", async (request, response) => await userService.ChangeToken(request, response));

//router.post("/ChangeToken", async (request, response) => await userService.ChangeToken(request, response));

router.post("/TakeById", async (request, response) => await userService.TakeById(request, response));

module.exports = router;