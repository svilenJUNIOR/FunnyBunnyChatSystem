var router = require("express").Router();
var bunnyService = require("../Services/BunnyService")

router.get("/All", async (request, response) => {
    var bunnies = await bunnyService.GetAll();
    response.send(bunnies);
});

router.get("/Profile", async (request, response) => {
    var id = "62d27402f94c62e1c90d82d0";
    var bunny = await bunnyService.GetById(id);
    response.send(bunny);
});

router.post("/Profile/:Id", async (request, response) => await bunnyService.Promote(request, response));

module.exports = router;