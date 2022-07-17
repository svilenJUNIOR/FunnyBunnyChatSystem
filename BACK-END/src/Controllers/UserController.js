var router = require("express").Router();
var userService = require("../Services/UserService")

router.post("/Register", async (request, response) => await userService.Register(request, response));
router.post("/Login", async (request, response) => {
    var token = await userService.Login(request, response)
    response.cookie("isAuth", token);
});
router.post("/Logout", async (request, response) => await userService.LogOut(request, response));

module.exports = router;