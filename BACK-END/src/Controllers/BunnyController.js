var router = require("express").Router();
var bunnyService = require("../Services/BunnyService")

router.get("/All", async (request, response) => {
    var bunnies = await bunnyService.GetAll();
    response.send(bunnies);
});

router.post("/Create/:Id", async (request, response) => await bunnyService.Create(request, response))

module.exports = router;