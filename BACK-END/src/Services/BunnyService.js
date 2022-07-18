var Bunny = require("../../Data/Models/Bunny");
var User = require("../../Data/Models/User")
var userService = require("../Services/UserService");

exports.GetAll = async () => await Bunny.find().lean();
exports.GetById = async (id) => await Bunny.findById(id);

exports.Create = async (request, response) => {
    var currentUserId = await request.params.Id;

    var bunny = await Bunny.create({
        Age: Number(request.body.Age),
        Bio: request.body.Bio,
        ChatName: request.body.ChatName,
        Gender: request.body.Gender,
        Picture: request.body.Picture,
        Region: request.body.Region,
        UserId: currentUserId
    });

    var update = { HasBunny: true };
    await User.findByIdAndUpdate(currentUserId, update);

    response.send(bunny);
};