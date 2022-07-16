var router = require("express").Router();
var bunnyService = require("../Services/BunnyService")

router.get("/All", async (request, response) => {
    var bunnies = await bunnyService.GetAll();
    response.send(bunnies);
});

router.get("/Profile", async (request, response) => {
    var id = "62d294e4b447a1fd43a147e9";
    var bunny = await bunnyService.GetById(id);
    response.send(bunny);
});

router.post("/Profile/:Id", async (request, response) => await bunnyService.Promote(request, response));

module.exports = router;