var router = require("express").Router();
var bunnyService = require("../Services/BunnyService")

router.get("/All", async (request, response) => {
    var bunnies = await bunnyService.GetAll();
    response.send(bunnies);
});

router.post("/Create", async (request, response) => await bunnyService.Create(request, response))

router.get("/ProfileData", async (request, response) => await bunnyService.ProfileData(request, response))

router.post("/Edit", async (request, response) => await bunnyService.Edit(request, response));

router.post("/SaveMessage", async (request, response) => await bunnyService.SaveMessage(request, response));

router.get("/ReturnBunny", async (request, response) => await bunnyService.ReturnBunny(request, response));

router.post("/ReturnMessages",  async (request, response) => await bunnyService.ReturnMessages(request, response));
module.exports = router;