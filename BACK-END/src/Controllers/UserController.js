var router = require("express").Router();
var userService = require("../Services/UserService")

router.post("/Register", (request, response) => {
    userService.Register(request, response);
    response.redirect("/");
})

module.exports = router;