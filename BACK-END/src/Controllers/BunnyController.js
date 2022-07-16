var router = require("express").Router();
var bunnyService = require("../Services/BunnyService")

router.get("/All", async (request, response) => {
    var bunnies = await bunnyService.GetAll();
    response.send(bunnies);
});

router.get("/Profile", async (request, response) => {
    var id = "62d00e01168ff5fdd408e55c";
    var bunny = await bunnyService.GetById(id);
    response.send(bunny);
});

module.exports = router;